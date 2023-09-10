{ pkgs }: {
	deps = [
		pkgs.python310
  pkgs.wget
  pkgs.postgresql_14
  pkgs.lolcat
    pkgs.nodePackages.prettier
		pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}