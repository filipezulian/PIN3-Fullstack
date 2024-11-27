import { inject, injectable } from "tsyringe";
import { IEsporteRepository } from "../repository/IEsporteRepository";

@injectable()
class ListEsportesUseCase {
constructor(
    @inject('EsporteRepository')
    private esporteRepository: IEsporteRepository
){}

    async execute(){
        return await this.esporteRepository.listEsportes();
    }

}

export { ListEsportesUseCase }
