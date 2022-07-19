const Joi=require('@hapi/joi')
  const registerValidation = (data) => {
 
    var re = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    const schema=Joi.object(
      {
      email:Joi.string().pattern(re).required().messages({
        "string.empty": `"email" cannot be an empty field`,
        "any.required": `"email" is a required field`,
        "string.base": `"email" should be a type of 'text'`,
      }),
      name:Joi.string().required().messages({
        "string.empty": `"name" cannot be an empty field`,
        "any.required": `"name" is a required field`
      }),
      education:Joi.string().required().messages({
        "string.empty": `"education" cannot be an empty field`,
        "any.required": `"education" is a required field`
      })
  
      }
  )
  const validation = schema.validate(data);
  return validation;
    };
    
module.exports.registerValidation = registerValidation;
