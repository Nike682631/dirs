export interface Dish{
    _id?: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    //we would probably want to convert this property to an enum at a later point mapping currencies to their symbols!
    currency: String,
    category: Category,
    availability: Array<Availability>,
    soldOut: Boolean,
    //We'll conventionally have prep time for a dish in minutes 
    //since that seems like the most likely real world scenario
    prepTime: Number,
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