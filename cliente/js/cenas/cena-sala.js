export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.image('salas', './assets/salas.png')
    this.load.image('vazio', '../assets/botoes/vazio.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'salas').setTint(0xcccccc)

    this.salas = [
      {
        numero: '1',
        x: 135,
        y: 195,
        botao: undefined
      },
      {
        numero: '2',
        x: 282,
        y: 195,
        botao: undefined
      },
      {
        numero: '3',
        x: 514,
        y: 195,
        botao: undefined
      },
      {
        numero: '4',
        x: 672,
        y: 195,
        botao: undefined
      },
      {
        numero: '5',
        x: 217,
        y: 295,
        botao: undefined
      },
      {
        numero: '6',
        x: 400,
        y: 295,
        botao: undefined
      },
      {
        numero: '7',
        x: 593,
        y: 295,
        botao: undefined
      },
      {
        numero: '8',
        x: 318,
        y: 359,
        botao: undefined
      },
      {
        numero: '9',
        x: 505,
        y: 359,
        botao: undefined
      },
      {
        numero: '10',
        x: 394,
        y: 425,
        botao: undefined
      }
    ]

    this.salas.forEach((item) => {
      item.botao = this.add
        .sprite(item.x, item.y, 'vazio')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala')
          this.game.scene.start('principal')
        })
    })
  }
}