//
//
//

export const child_variants = {
	hidden: {
		opacity: 0,
	},
	"hidden-left": {
		x: -200,
	},
	"hidden-right": {
		x: 100,
	},
	"fade-in": {
		opacity: 1,
	},
	"fade-out": {
		opacity: 0,
	},
	"bounce-in": {
		opacity: 1,
		scale: 1,
		transition: {
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
	},
};
