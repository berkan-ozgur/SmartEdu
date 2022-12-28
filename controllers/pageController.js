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
