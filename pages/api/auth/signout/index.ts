import { NextApiRequest, NextApiResponse } from 'next';

const signout = (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ status: 'ok' });
};

export default signout;
