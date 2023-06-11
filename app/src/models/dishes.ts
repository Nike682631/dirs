export interface Dish{
    _id?: string,
    name: string,
    description: string,
    price: number,
    image: string,
    //Improvement: we would probably want to convert this property to an enum at a later point mapping currencies to their symbols!
    currency: string,
    category: Category,
    //Improvement: we would want this to be an array of availibilities but implementing a multi select component
    //in current time span would be difficul
    availability: Availability,
    soldOut: Boolean,
    //Improvement: We'll conventionally have prep time for a dish in minutes 
    //since that seems like the most likely real world scenario
    prepTime: number,
    _Created?: Date,
    _Changed?: Date
}

export enum Category{
    Starter = "Starter",
    MainCourse = "Main Course",
    Dessert = "Dessert",
    Beverage = "Beverage"
}

export enum Availability{
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner",
    Weekdays = "Weekdays",
    Weekends = "Weekends"
}