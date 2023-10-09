const Order = require("../models/orderModel");
const Material = require("../models/materialModel");
const Product = require("../models/productModel");
const Employee = require("../models/employeeModel");
const User = require(".././models/userModel");

const getOrderTimeFrames = () => {
  const currentDate = new Date();

  const todayStart = new Date(currentDate);
  todayStart.setHours(0, 0, 0, 0);

  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());

  const monthStart = new Date(currentDate);
  monthStart.setDate(1);

  const todayCondition = {
    expected_arrival: {
      $gte: todayStart,
      $lt: new Date(currentDate.getTime() + 24 * 60 * 60 * 1000),
    },
    order_status: { $ne: "Delivered" },
  };

  const weekCondition = {
    expected_arrival: {
      $gte: weekStart,
      $lt: new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000),
    },
    order_status: { $ne: "Delivered" },
  };

  const monthCondition = {
    expected_arrival: {
      $gte: monthStart,
      $lt: new Date(monthStart.getTime() + 30 * 24 * 60 * 60 * 1000),
    },
    order_status: { $ne: "Delivered" },
  };
  return { todayCondition, weekCondition, monthCondition };
};

exports.getDashboardData = async (req, res) => {
  const { todayCondition, weekCondition, monthCondition } = getOrderTimeFrames();
  try {
    const employees = await Employee.count();
    const users = await User.count();
    const orders = await Order.count();
    const products = await Product.count();
    const productsStock = await Product.count({ quantity: { $gt: 0 } });
    const ordersToday = await Order.count(todayCondition);
    const ordersWeek = await Order.count(weekCondition);
    const ordersMonth = await Order.count(monthCondition);

    res.status(200).json({
      employeeCount: employees,
      employeesWoAccount: employees - users,
      orderCount: orders,
      productCount: products,
      productsInStock: productsStock,
      ordersToday: ordersToday,
      ordersWeek: ordersWeek,
      ordersMonth: ordersMonth,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
