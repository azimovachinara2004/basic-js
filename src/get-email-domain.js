const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  let newEmail=email.split('')

  let res= newEmail.lastIndexOf('@')
  let domain_name=email.slice(res+1)
      return domain_name
}

module.exports = {
  getEmailDomain
};
