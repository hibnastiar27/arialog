const si = require('react-icons/si');
const needed = ["SiNodedotjs", "SiExpress", "SiTypescript", "SiNestjs", "SiDocker", "SiLaravel", "SiPython", "SiVuedotjs", "SiReact", "SiNextdotjs", "SiMongodb", "SiMysql"];
needed.forEach(n => {
  if(!si[n]) console.log("Missing:", n);
});
console.log("Done");
