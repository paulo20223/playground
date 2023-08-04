export interface IServiceData {
  name: string
  image: string
}

export class ServiceModel {
  name: string
  image: string

  constructor(data: IServiceData) {
    this.name = data.name
    this.image = data.image
  }
}
