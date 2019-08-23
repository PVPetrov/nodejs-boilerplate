import colors from 'colors';
import logSymbols from 'log-symbols';

const commands = {
  error: value => console.error(logSymbols.error, value.red),
  success: value => console.log(logSymbols.success, value.green),
  info: value => console.info(logSymbols.info, value.blue),
  warn: value => console.warn(logSymbols.warning, value.yellow.underline)
};

export default () => {
  global.logger = {};
  Object.keys(commands).map(command => {
    global.logger[command] = commands[command];
  });
};
