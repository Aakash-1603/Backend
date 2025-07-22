const shortid = require("shortid");

const URL = require("../model/url");

async function generatenewshorturl(req, res) {
  try {
    const body = req.body;

    if (!body.URL) {
      return res.status(400).json({
        error: "URL is required",
      });
    }

    const shortID = shortid.generate();

    await URL.create({
      shortId: shortID,
      redirectURL: body.URL,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = {
  generatenewshorturl,
};
