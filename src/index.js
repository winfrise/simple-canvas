import { Block } from './block'
import { raf } from './utils/index'

class SimpleCanvas {
  constructor (canvas, options = {}) {
    const DEFAULT_OPTIONS = {
      autoStart: false
    }

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)

    this.canvas = typeof canvas === 'string' ? document.querySelector(canvas) : canvas
    this.canvasRect = this.canvas.getBoundingClientRect()
    this.ctx = this.canvas.getContext('2d')
    this.blockList = []
    this.renderList = []
    
    this.canvas.addEventListener('click', (e) => {
      let x = e.offsetX
      let y = e.offsetY
      this.blockList.forEach(block => {
        if (block.checkBoundary(x, y)) block.trigger('click')
      })
    })

    if (this.options.autoStart) {
      this.start()
    }
    
  }

  createBlock (x, y, w, h, color) {
    const {ctx} = this
    const block = new Block(ctx, x, y, w, h, color)
    this.blockList.push(block)
    return block
  }
  addStage (block) {
    this.renderList.push(block)
  }
  start () {
    const updater = () => {
      this.renderList.forEach(block => {
        block.draw()
      })
      raf(updater)
    }
    updater()
  }
}

window.SimpleCanvas = SimpleCanvas