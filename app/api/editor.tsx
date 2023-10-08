import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(res: NextApiResponse, req: NextApiRequest) {
    res.status(200).json({ editor: 'VSCode+Neovim' });
}