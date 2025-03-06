import json
import random

# Lista de lojas
lojas = [
    "Doce Delícia", "Fast Burger", "Comida Brasileira", "Sushi House", 
    "Saudável & Saboroso", "Mexican Food", "Pizza Mania", "Gourmet Express", 
    "Delícias da Vovó", "Sabor e Cia"
]

# Lista de tipos de comida
tipos = ["sobremesas", "fast-foods", "brasileira", "japonesa", "saudavel", "mexicana"]

# Função para gerar um nome de comida aleatório
def gerar_nome(tipo):
    if tipo == "sobremesas":
        return random.choice(["Bolo de Chocolate", "Pudim de Leite", "Torta de Morango", "Brigadeiro", "Cheesecake"])
    elif tipo == "fast-foods":
        return random.choice(["Hamburguer com Queijo", "Pizza Margherita", "Batata Frita", "Hot Dog", "Chicken Wings"])
    elif tipo == "brasileira":
        return random.choice(["Feijoada", "Moqueca", "Churrasco", "Acarajé", "Pão de Queijo"])
    elif tipo == "japonesa":
        return random.choice(["Sushi", "Tempura", "Sashimi", "Ramen", "Yakimeshi"])
    elif tipo == "saudavel":
        return random.choice(["Salada Mediterrânea", "Quinoa com Legumes", "Smoothie Bowl", "Abacate com Ovo", "Açaí"])
    elif tipo == "mexicana":
        return random.choice(["Taco de Carne", "Burrito", "Nachos", "Quesadilla", "Guacamole"])

# Função para gerar a entrada de um produto
def gerar_produto():
    tipo = random.choice(tipos)
    nome = gerar_nome(tipo)
    loja = random.choice(lojas)
    imagem = f"https://www.google.com/search?q={nome.replace(' ', '+')}&tbm=isch"
    
    return {
        "nome": nome,
        "loja": loja,
        "tipo": tipo,
        "imagem": imagem
    }

# Gerar 1000 produtos
produtos = [gerar_produto() for _ in range(1000)]

# Salvar os dados em um arquivo JSON
with open("bd.json", "w", encoding="utf-8") as f:
    json.dump(produtos, f, ensure_ascii=False, indent=4)

print("Arquivo JSON com 1000 produtos gerado com sucesso!")
