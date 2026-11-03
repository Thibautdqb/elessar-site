"""Serve this static review folder locally, using a free port by default."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import threading
import webbrowser


def main():
    parser = argparse.ArgumentParser(description="Ouvrir la maquette Elessar en local.")
    parser.add_argument("--port", type=int, default=0, help="Port local ; 0 choisit un port libre.")
    parser.add_argument("--no-open", action="store_true", help="Afficher l'adresse sans ouvrir le navigateur.")
    args = parser.parse_args()
    directory = Path(__file__).resolve().parent
    handler = partial(SimpleHTTPRequestHandler, directory=str(directory))
    try:
        with ThreadingHTTPServer(("127.0.0.1", args.port), handler) as server:
            url = f"http://127.0.0.1:{server.server_port}"
            print(f"\nElessar — maquette locale\n{url}\n\nGarder ce terminal ouvert. Ctrl+C pour arrêter.\n", flush=True)
            if not args.no_open:
                opener = threading.Timer(.4, webbrowser.open, args=(url,))
                opener.daemon = True
                opener.start()
            try:
                server.serve_forever()
            except KeyboardInterrupt:
                print("\nServeur local arrêté.")
    except OSError as error:
        parser.exit(1, f"Impossible de démarrer le serveur local : {error}\n")


if __name__ == "__main__":
    main()
