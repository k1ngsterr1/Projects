use std::io;

fn main() {
    loop{
        let mut input = String::new();
        println!("Enter your operation (e.g., 1 + 1) or type 'exit' to quit:");

        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");

        if input.trim().eq_ignore_ascii_case("exit"){
            break;
        }

        let tokens: Vec<&str> = input.trim().split_whitespace().collect();
        if tokens.len() != 3 {
            print!("Please enter a valid operation.");
            continue;
        }

        let num1 = tokens[0].parse::<f64>();
        let operator = tokens[1];
        let num2 = tokens[2].parse::<f64>();


        match (num1, operator, num2) {
            (Ok(n1), "+", Ok(n2)) => println!("Result: {}", n1 + n2),
            (Ok(n1), "-", Ok(n2)) => println!("Result: {}", n1 - n2),
            (Ok(n1), "*", Ok(n2)) => println!("Result: {}", n1 * n2),
            (Ok(n1), "/", Ok(n2)) => {
                if n2 != 0.0 {
                    println!("Result: {}", n1 / n2);
                } else {
                    println!("Cannot divide by zero.");
                }
            },
            _ => println!("Invalid operation or numbers."),
        }
    }
}
