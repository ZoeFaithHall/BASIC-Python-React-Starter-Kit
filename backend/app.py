from flask import Flask, request, jsonify
from ariadne import QueryType, make_executable_schema, graphql_sync
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (adjust origins as necessary)
CORS(app, resources={r"/*": {"origins": "*"}})

# Define GraphQL type definitions (schema) as a string
type_defs = """
    type Query {
        hello(name: String): String!
        estimateCost(amount: Float!): Float!
    }
"""

# Define resolvers
query = QueryType()

@query.field("hello")
def resolve_hello(_, info, name="world"):
    """Resolver for 'hello' query."""
    return f"Hello, {name}!"

@query.field("estimateCost")
def resolve_estimate_cost(_, info, amount):
    """Resolver for 'estimateCost' query."""
    if amount <= 0:
        raise ValueError("Amount must be greater than 0")
    # Example logic: Add a multiplier (adjust as needed)
    return amount * 1.2

# Create executable schema
schema = make_executable_schema(type_defs, query)

# Define GraphQL endpoint
@app.route("/graphql", methods=["GET", "POST"])
def graphql_server():
    if request.method == "GET":
        # Serve GraphiQL for testing in the browser (Optional)
        return """
        <!DOCTYPE html>
        <html>
        <head>
            <title>GraphiQL</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/1.4.2/graphiql.min.css" rel="stylesheet" />
        </head>
        <body style="margin: 0;">
            <div id="graphiql" style="height: 100vh;"></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/1.4.2/graphiql.min.js"></script>
            <script>
                const graphQLFetcher = graphQLParams =>
                    fetch('/graphql', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(graphQLParams),
                    }).then(response => response.json());
                ReactDOM.render(
                    React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
                    document.getElementById('graphiql'),
                );
            </script>
        </body>
        </html>
        """, 200
    # Handle POST requests for GraphQL queries
    data = request.get_json()
    success, result = graphql_sync(schema, data, context_value=request, debug=True)
    status_code = 200 if success else 400
    return jsonify(result), status_code

if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True)