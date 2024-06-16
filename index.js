import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {registerValidator} from './validation/auth.js';
import {validationResult} from 'express-validator';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});

const DIRNAME = "C:\\Users\\Юля\\Desktop\\www"

let users = {};

class User {
    constructor(login, name, email) {
        this.login = login
        this.name = name;
        this.email = email;
    }
}

// Добавление пользователя
let user1 = new User("Имя", "email@example.com", "login1");
users[user1.login] = user1;



app.get('/', (req, res) => {
    res.sendFile(DIRNAME + '/templates/index.html');
});
app.get('/preschoolers', (req, res) => {
    res.sendFile(DIRNAME + '/templates/preschoolers.html');
});
app.get('/schoolchild', (req, res) => {
    res.sendFile(DIRNAME + '/templates/schoolchild.html');
});
app.get('/schoolchild', (req, res) => {
    res.sendFile(DIRNAME + '/templates/schoolchild.html');
});
app.get('/liveMath', (req, res) => {
    res.sendFile(DIRNAME + '/templates/liveMath.html');
});
app.get('/SLA', (req, res) => {
    res.sendFile(DIRNAME + '/templates/SLA.html');
});

app.get('/login', (req, res) => {
    res.sendFile(DIRNAME + '/templates/login.html');
});
app.get('/signup', (req, res) => {
    res.sendFile(DIRNAME + '/templates/signup.html');
});
app.get('/profile', (req, res) => {
    res.sendFile(DIRNAME + '/templates/profile.html');
});
app.get('/admin', (req, res) => {
    res.sendFile(DIRNAME + '/templates/admin.html');
});
app.post('/signup', async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        passwordHash,
    });
    const user = await doc.save();
    res.json({
        success: true,
    });
});

// registerValidator
app.post('/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign({

            email: req.body.email,
            fullName: 'Юля Балакина',
        },
        'secret123',
    );
    res.json({
        success: true,
        token,
    });
});


let port = 3001;
app.listen(port, () => {
        console.log(`Сервер запущен: http://localhost:${port}`);
    }
);