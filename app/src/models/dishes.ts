export interface Dish{
    _id?: Number,
    name: String,
    description: String,
    price: Number,
    currency: String,
    category: Category,
    availability: Availability,
    soldOut: Boolean,
    //We'll conventionally have prep time for a dish in minutes 
    //since that seems like the most likely real world scenario
    prepTime: Number,
    _Created?: Date,
    _Changed?: Date
}

enum Category{
    Starter = "Starter",
    MainCourse = "Main Course",
    Dessert = "Dessert",
    Beverage = "Beverage"
}

enum Availability{
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner",
    Weekdays = "Weekdays",
    Weekends = "Weekends"
}