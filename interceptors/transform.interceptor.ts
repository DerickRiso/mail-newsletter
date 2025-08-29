import { 
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler 
} from "@nestjs/common";
import { map, Observable, timestamp } from "rxjs";


@Injectable()
export class TransformNewsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        return next.handle().pipe(
            map((data) => {
            type News = {
                title: string,
                abstract: string,
                text: string,
                url: string
            }

            // Confere se results é um array, caso não seja, se torna
            const results = Array.isArray(data.results) ? data.results : [];

            //  Diferente do ForEach, map executa vários passos por execução
            //  Para cada item do array é criado um objeto novo e passado para o array

            const response: News[] = results.map(item => ({
                title: item.title || "",
                abstract: item.abstract || "",
                text: item.multimedia?.[0]?.caption || "",
                url: item.url || ""
            }));

                return {
                    sucess: true,
                    response
                }
            })
        )   
    }
}

@Injectable()
export class TransformWordsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        type Words = {
            word: string;
            definition: string;
        }
        
        return next.handle().pipe(
            map((data) => {
                
                let response: Words = {
                    word: "",
                    definition: ""
                };
                response.word = data[0].word || "";
                response.definition = data[0].meanings[0].definitions[0].definition || "";

                return {
                    sucess: true,
                    response
                }
            })
        )
    }
}

@Injectable()
export class TransformBooksInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        type Books = {
            name: string,
            author: string,
            cover: string
        }

        return next.handle().pipe(
            map((data) => {

                // let response: Books = {
                //     name: data.docs[0].title,
                //     author: "",
                //     cover: ""
                // };

                // console.log(response);

                return {
                    sucess: true,
                    data
                }
            })
        )
    }
}
