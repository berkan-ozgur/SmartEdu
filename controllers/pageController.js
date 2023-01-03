const nodemailer = require("nodemailer");
const Course = require('../models/Course');
const User = require('../models/User');

exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: 'index',
    });
};

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

exports.getCoursesPage = (req, res) => {
    res.status(200).render('courses', {
        page_name: 'courses',
    });
};

exports.getRegistersPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};

exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
};

exports.sendEmail = async (req, res) => {

    try {
        const outputMessage = `
    
    <h1>Mail Details </h1>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    `

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'santos.metz@ethereal.email',
                pass: 'a4wf3vfKgFJY68yF1s'
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Smart EDU Contact Form" <sennqrial@gmail.com>', // sender address
            to: "berkanozgur@hotmail.com", // list of receivers
            subject: "Smart EDU Contact Form New Message ✔", // Subject line
            html: outputMessage, // html body
        });

        req.flash("success", "We received your message successfully")

        res.status(200).redirect('contact');
    } catch (err) {
        req.flash("error", "Something went wrong")
        res.status(200).redirect('contact');
    }
};

exports.getIndexPage = async (req, res) => {

    const courses = await Course.find().sort('-createdAt').limit(2);
    const totalCourses = await Course.find().countDocuments();
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalTeachers = await User.countDocuments({ role: 'teacher' });

    res.status(200).render('index', {
        page_name: 'index',
        courses,
        totalCourses,
        totalStudents,
        totalTeachers
    });
};
