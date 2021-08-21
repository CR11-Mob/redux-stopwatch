const timeFormatter = (time) => {
  let { h, m, s } = time;

  if (h.toString().length < 2) h = `0${h}`;

  if (m.toString().length < 2) m = `0${m}`;

  if (s.toString().length < 2) s = `0${s}`;

  return { h, m, s };
};

export default timeFormatter;
