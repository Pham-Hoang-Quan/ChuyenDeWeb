const express = require('express')
const Account = require('../models/accountModel')
const router = express.Router()
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.json({mssg: 'GET all acc'})
})

//get a sigle workout
router.get('id', (req, res) => {
    res.json({mssg: 'GET a single acc'})
})

router.post('/signup', async (req, res) => {
    const { nickName, email, password } = req.body;

    try {
        // Kiểm tra xem email đã được sử dụng chưa
        const existingAccount = await Account.findOne({ email });
        if (existingAccount) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo tài khoản mới
        const newAccount = await Account.create({
            nickName,
            email,
            password: hashedPassword // Lưu mật khẩu đã mã hóa vào cơ sở dữ liệu
        });

        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ error: 'Could not create account' });
    }
});

//get all account
router.get('/signup', async (req, res) => {
    try {
        // Lấy danh sách các tài khoản từ cơ sở dữ liệu
        const accounts = await Account.find();

        // Trả về danh sách các tài khoản dưới dạng JSON
        res.status(200).json(accounts);
    } catch (error) {
        // Xử lý lỗi nếu có
        res.status(500).json({ error: 'Could not retrieve accounts' });
    }
})

//sign in
router.post('/signin', async (req, res) => {
    const { nickName, password } = req.body;

    try {
        // Tìm tài khoản trong cơ sở dữ liệu
        const account = await Account.findOne({ nickName });
        if (!account) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // So sánh mật khẩu
        const isPasswordMatch = await bcrypt.compare(password, account.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Đăng nhập thành công
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


//delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE'})
})

//update
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE'})
})

module.exports = router