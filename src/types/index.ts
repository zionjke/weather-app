export type WeatherDataType =  {
    "weather": [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    },
    sys: {
        country: string
    }
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    cod:number
    id: number,
    name: string,
    message:string
}

export type DailyWeatherDataType = {
    list: WeatherDataType[]
}

export type WeatherStateType = {
    isLoading:boolean,
    error: string,
    currentWeather: WeatherDataType | null,
    dailyWeather: WeatherDataType[],
}

export type QueriesStateType = {
    selectedQuery: string,
    queries: string[],
    message: string
}

export type ErrorType = {
    cod: string
    message: string
}