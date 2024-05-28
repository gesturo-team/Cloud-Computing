import jwt from 'jsonwebtoken';

export default function auth(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ 
            status: 'fail',
            message: 'Unauthorized. Please login.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ 
            status: 'fail',
            message: 'Invalid token.'
        });
    }
}