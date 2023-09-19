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


@app.route("/")
def hello_world():
    return render_template('home.html', jobs=JOBS, company_name='Indvalley')


@app.route("/jobs")
def jobs():
    return jsonify(JOBS)


@app.route('/favicon.png')
def favicon():
    return url_for('static', filename='image/favicon.ico')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
