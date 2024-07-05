{
  description = "jirami.de";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in
  {
    devShells.${system}.default =
      pkgs.mkShell {
        packages = with pkgs; [
          nodejs-slim
          nodePackages.npm
          nodePackages.typescript-language-server
        ];

        DEV_SHELL_ACTIVE = "jirami.de";
      };
  };
}
