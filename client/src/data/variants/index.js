export const fade = {
  visible: {
    opacity: 1
  }, 
  hidden: {
    opacity: 0
  }
}

export const fromLeft = {
  hidden: {
    x: "-100%",
    opacity:0,
    transition: {
      type: "tween"
    }
  },
  visible: {
    x: 0, 
    opacity: 1,
    transition: {
      type: "tween"
    }
  }
}

export const fromBottom = {
  hidden: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 1.5, 
      type: "tween"
    }
  },
  visible: {
    y: 0,
    opacity: 1.5,
    transition: {
      duration: 1, 
      type: "tween"
    }
  }
}