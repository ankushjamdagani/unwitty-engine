import { connectToDatabase } from '../../../utils/mongodb';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();

    const project = await db
      .collection('projects')
      .find({ slug: String(req.query.slug) })
      .toArray();

    res.status(200).json({
      data: project[0] || null,
      status: 200
    });
  } else {
    res.status(404).json({
      msg: 'POST is invalid on current route'
    });
  }
};
