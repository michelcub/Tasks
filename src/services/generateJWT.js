import jwt from 'jsonwebtoken';

const generateJWT = (user) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return token;
}

export default generateJWT;