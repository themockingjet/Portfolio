//
//
//

export const parent_variants = {
	hidden: {
		opacity: 0,
	},
	"hidden-left": {
		x: -100,
	},
	"hidden-right": {
		x: 100,
	},

	"fade-in": {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"fade-out": {
		opacity: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"sl-fade-in": {
		opacity: 1,
		x: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"sl-fade-out": {
		opacity: 0,
		x: -100,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sr-fade-in": {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sr-fade-out": {
		opacity: 0,
		x: 100,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sl-in": {
		x: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sl-out": {
		x: -100,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sr-in": {
		x: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			delay: 0.3,
		},
	},
	"sr-out": {
		x: 100,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"su-in": {
		y: 0,
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"su-out": {
		y: 100,
		opacity: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"sd-in": {
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"sd-out": {
		y: -100,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	"bounce-in": {
		opacity: 1,
		scale: 1,

		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,

			ease: [0, 0.71, 0.2, 1.01],
			scale: {
				type: "spring",
				damping: 5,
			},
		},
	},
	"bounce-out": {
		opacity: 0,
		scale: 0.5,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};
