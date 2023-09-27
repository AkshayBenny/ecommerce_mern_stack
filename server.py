from flask import Flask, render_template, url_for, jsonify

app = Flask(__name__)

JOBS = [
    {
        'id': 1,
        'title': 'Web developer',
        'description': 'We are looking for a skilled frontend developer with experience in React and Vue.',
        'location': 'Glasgow',
        'salary': '10,000GBP'
    }, {
        'id': 2,
        'title': 'Frontend developer',
        'description': 'We are looking for a skilled frontend developer with experience in React and Vue.',
        'location': 'London',
        'salary': '5,000GBP'
    }, {
        'id': 3,
        'title': 'Backend developer',
        'description': 'We are looking for a skilled frontend developer with experience in React and Vue.',
        'location': 'Remote',
        'salary': '20,000GBP'
    }, {
        'id': 4,
        'title': 'Prompt Engineer',
        'description': 'We are looking for a skilled frontend developer with experience in React and Vue.',
        'location': 'Glasgow',
        'salary': '1,000GBP'
    }, {
        'id': 5,
        'title': 'Data Analyst',
        'description': 'We are looking for a skilled frontend developer with experience in React and Vue.',
        'location': 'Glasgow',
        'salary': '10,000GBP'
    },
]

# PAGE ROUTES


@app.route("/")
def home():
    return render_template('home.html', jobs=JOBS, company_name='Indvalley')


# API ROUTES
@app.route("/api/jobs", methods=['GET'])
def jobs_api():
    return jsonify(JOBS)


@app.route('/api/signin', methods=['GET', 'POST'])
def signin():
    return 'Signin page'

# OTHER ROUTES


@app.route('/favicon.png')
def favicon():
    return url_for('static', filename='image/favicon.ico')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000,  debug=True)
