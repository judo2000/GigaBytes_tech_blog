const {
    User
} = require('../models');

module.exports = {
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'You must provide a username, email, and password.'});
        }

        try {
            const user = await User.create({
                username,
                email,
                password,
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },
    renderHomePage: async (req, res) => {
        res.render('homepage');
    },
    getUserById: async (req, res) => {
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = UserData.get({ plain: true });
            res.render('singleUser', {
                user,
                loggedInUser: req.session.user || null,
            });
        } catch (e) {
            res.json(e);
        }
    },
    login: async (req, res) => {
        try {
            const UserData = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            const userFound = userData.get({ plain: true });

            if(userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = userFound;
                    res.json({ success: true });
                });
            }
        } catch (e) {
            res.json(e);
        }
    },
    signUpHandler: async (req, res) => {
        const { email, username, password } = req.body;
        try {
            const createUser = await User.create({
                email,
                username,
                password,
            });
            const user = createUser.git({ plain: true });
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user = user;
                res.redirect('/')
            });
        } catch (e) {
            res.json(e);
        }
    },
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/');
        }
        res.render('login');
    },
    signupView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/');
        }
        res.render('signUp');
    },
}