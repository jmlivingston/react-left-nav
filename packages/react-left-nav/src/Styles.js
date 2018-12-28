const background = '#343a40'
const boxShadow = 'inset -3x 0 3px -3px #fff'
const activeColor = '#495057'
const hoverColor = '#212529'
const color = '#dee2e6'
const transition = 'all 0.075s ease-in'
const padding = '12px'

const largeWindowWidth = 1024
const mediumWindowWidth = 768
const smallWindowWidth = 640

const largeWidth = 256
const mediumWidth = 100
const smallWidth = 75

export default {
  contentBreakPoints: [
    {
      minWidth: largeWindowWidth,
      style: {
        marginLeft: largeWidth
      }
    },
    {
      minWidth: mediumWindowWidth,
      style: {
        marginLeft: mediumWidth
      }
    },
    {
      minWidth: smallWindowWidth,
      style: {
        marginLeft: smallWidth
      }
    }
  ],
  leftNav: {
    background,
    boxShadow,
    color,
    height: '100%',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    transition
  },
  leftNavBreakPoints: [
    {
      minWidth: largeWindowWidth,
      style: {
        left: 0,
        width: largeWidth
      }
    },
    {
      minWidth: mediumWindowWidth,
      style: {
        left: 0,
        width: mediumWidth
      }
    },
    {
      minWidth: smallWindowWidth,
      style: {
        left: 0,
        width: smallWidth
      }
    },
    {
      minWidth: 0,
      style: {
        left: -largeWidth
      }
    }
  ],
  leftNavItems: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0
  },
  leftNavItem: {
    background,
    borderBottom: `1px solid ${activeColor}`,
    boxShadow,
    cursor: 'pointer',
    padding,
    fontSize: 18,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  leftNavItemActive: {
    background: activeColor
  },
  leftNavItemHover: {
    background: hoverColor
  },
  leftNavItemBreakPoints: [
    {
      minWidth: largeWindowWidth,
      style: {
        textAlign: 'left'
      }
    },
    {
      minWidth: mediumWindowWidth,
      style: {
        textAlign: 'center'
      }
    },
    {
      minWidth: smallWindowWidth,
      style: {
        textAlign: 'center'
      }
    },
    {
      minWidth: 0,
      style: {
        left: -largeWidth
      }
    }
  ],
  leftNavItemImageBreakPoints: [
    {
      minWidth: largeWindowWidth,
      style: {
        display: 'inline-block',
        width: 25,
        textAlign: 'center',
        marginRight: 8
      }
    },
    {
      minWidth: mediumWindowWidth,
      style: {
        fontSize: 36,
        display: 'block',
        textAlign: 'center'
      }
    },
    {
      minWidth: smallWindowWidth,
      style: {
        fontSize: 24,
        display: 'block',
        textAlign: 'center'
      }
    }
  ],
  leftNavItemTextBreakPoints: [
    {
      minWidth: largeWindowWidth,
      style: { display: 'inline-block' }
    },
    {
      minWidth: mediumWindowWidth,
      style: { display: 'block' }
    },
    {
      minWidth: smallWindowWidth,
      style: { display: 'none' }
    },
    {
      minWidth: 0,
      style: { display: 'none' }
    }
  ]
}
