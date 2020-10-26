export default tz => (new Date().toLocaleString('se', { timeZone: tz })).split(', ')[1];
