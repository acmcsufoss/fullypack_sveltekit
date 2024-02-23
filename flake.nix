{
	inputs = {
		nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
		flake-utils.url = "github:numtide/flake-utils";
	};

	outputs =
		{ self, nixpkgs, flake-utils }:

		flake-utils.lib.eachDefaultSystem (system:
			with nixpkgs.legacyPackages.${system};
			{
				devShell = mkShell {
					packages = [
						nodejs
					];
					shellHook = ''
						export PATH="$PATH:$(git rev-parse --show-toplevel)/node_modules/.bin"
					'';
				};
			}
		);
}
