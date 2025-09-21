import tkinter as tk

# Window creation
window = tk.Tk()

# Window label
window.title("Yeri Universe POS")

# Window size
window.geometry("800x550")

# Window run
window.mainloop()

#Database creation
products = {
     "101": {"Nombre": "Ttein", "Precio": 1000.00, "Cantidad": 10},
     "102": {"Nombre": "Framin", "Precio": 120.00, "Cantidad": 100},
     "103": {"Nombre": "Lubvoil", "Precio": 550.00, "Cantidad": 50}
}

# Billing system
billing_window = tk.Toplevel(window)

#Window label
billing_window.title("Buscador de productos")

# Window size
billing_window.geometry("600x400")


