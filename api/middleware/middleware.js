function logger(req, res, next) {
  // DO YOUR MAGIC
  const methode = req.methode;
  const url = req.url;
  const time = new Date().toISOString();
  console.log(`'${methode} ${url} ${time}`)
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const id = req.params.id;
  user.findById(id, (err, user) => {
    if(err) {
      next(err);
    } else if (user) {
      req.user = user
      next();
    } else {
      res.status(404).json({message: "user not found"});
    }
  });
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const body = req.body;
  if(body.name) {
    next();
  } else {
    res.status(400).json({message: "missing required name field"});
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const body = req.body;
  if(body.text){
    next();
  } else {
    res.status(400).json({message: "missing required text field"});
  }
}

// do not forget to expose these functions to other modules
module.export = {
  validateUser,
  validateUserId,
  validatePost,
  logger,
}
