const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '500px',
	tablet: '769px', // iPad dimensions: 768w x 1024h
	laptop: '1024px',
	desktop: '1440px',
};

const query = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`,
};

export { size, query };
