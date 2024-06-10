const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('models/User');

function generateId() {
    const newId = "";
    //generate unique ID
    return newId;
}

// Sign-up route
exports.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    const id = generateId();

    // Check if user already exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({id, username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
});

// Sign-in route
exports.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.json({ token });
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.userId = decoded.userId;
        next();
    });
}

// Protected route
exports.get('/user', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user);
});
