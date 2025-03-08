from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'ton_secret_key_ici'  # Nécessaire pour les messages flash


# Route pour la page d'accueil
@app.route('/')
def home():
    return render_template('index.html')


# Route pour la page À propos
@app.route('/about')
def about():
    return render_template('about.html')


# Route pour la page Projets
@app.route('/projects')
def projects():
    return render_template('projects.html')


# Route pour la page Services
@app.route('/services')
def services():
    return render_template('services.html')


# Route pour la page Contact
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Récupérer les données du formulaire
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        # Validation simple
        if not name or not email or not message:
            flash('Tous les champs sont obligatoires.', 'error')
        else:
            # Ici, tu peux traiter les données (par exemple, les enregistrer dans une base de données ou envoyer un email)
            print(f"Nom: {name}, Email: {email}, Message: {message}")
            flash('Votre message a bien été envoyé !', 'success')
            return redirect(url_for('contact'))

    # Si la méthode est GET, afficher simplement le formulaire
    return render_template('contact.html')


# Lancer l'application
if __name__ == '__main__':
    app.run(debug=True)
