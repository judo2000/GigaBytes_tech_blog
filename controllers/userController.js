const {
    User,
} = require('../models');

module.exports = {
    createUser: async (req, res) => {
		const { username, email, password } = req.body;
		if (!username || !email || !password ) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
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
    
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({ plain: true }));
            res.json(users);
            // res.render('allUsers', {
            //     users,
            //     loggedInUser: req.session.user || null,
            // });
        } catch (e) {
            res.json(e);
        }
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
            const userData = await User.findOne({ 
                where: {
                    email: req.body.email
                }
             });
            const userFound = userData.get({ plain: true });
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = userFound;
                    req.session.user_id = userFound.id;
                    res.json({ success: true });
                });
            }
           
        } catch (e) {
            res.json(e);
        }
    },
    signupHandler: async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const createdUser = await User.create({
                username,
                email,
                password,
            });
            const user = createdUser.get({ plain: true });
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user = user;
                res.redirect('/dashboard');
            });
        } catch (e) {
            res.json(e);
        }
    },
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/dashboard');
        }
        res.render('login');
    },
    signupView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/dashboard');
        }
        res.render('signup');
    },
    logout: (req, res) => {
        req.session.destroy(() => {
            res.send({ status: true });
        });
    }
}