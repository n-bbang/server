import RateLimit from 'express-rate-limit';

const APILimiter = new RateLimit({
	windowMs:60 *1000,
	max:3,
	handler(req,res) {
		res.status(this.statusCode).json({
			code: this.statusCode,
			message:'1분에 3번만 요청하실 수 있습니다.',
		})
	}
})

export default APILimiter;