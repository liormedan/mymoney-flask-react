from flask import Flask, render_template

app = Flask(__name__)

# Route for the main dashboard
@app.route('/')
def home():
    return render_template('frontend/budget_dashboard.html')  # Update path to reflect new structure

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Run on port 5001
