import EventEmitter from './utils/event-emitter'
export class Block extends EventEmitter {
  constructor (ctx, x, y, w, h, color) {
    super()
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
  }

  /**
   * 检查坐标是否在块的元素范围内
   */
  checkBoundary (x, y) {
    return x > this.x && x < (this.x + this.w) && y > this.y && y < (this.y + this.h)
  }

  draw () {
    const { ctx, x, y, w, h, color} = this
    ctx.save()
    ctx.beginPath()
    if (color) {
      ctx.fillStyle = color
    }
    ctx.rect(x, y, w, h)
    ctx.closePath()

    ctx.fill()
    ctx.restore()
  }
}