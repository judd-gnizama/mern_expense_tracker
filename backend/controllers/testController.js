export const test = async (req, res) => {
  const date = new Date().toLocaleTimeString();
  res.status(200).json({ message: `Heylow at ${date}` });
};
