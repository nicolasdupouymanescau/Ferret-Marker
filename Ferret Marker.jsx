var panelGlobal = this;
var win = (function () { 
	var win =
		panelGlobal instanceof Panel ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true,
});
     // UI initialization
	if (!(panelGlobal instanceof Panel)) win.text = "Ferret Marker";
	win.orientation = "column";
	win.alignChildren = ["center", "top"];
	win.preferredSize.height = 100;
	win.spacing = 2;
	win.margins = 5;
	var group0 = win.add("group", undefined, {
		name: "group0",
	});

	group0.orientation = "row";
	group0.alignChildren = ["left", "center"];
	group0.spacing = 0;
	group0.margins = 0;
	group0.alignment = ["left", "top"];

	var headerVec = ["0.00 35.36 0.00 9.27 9.98 9.27 9.98 12.39 3.96 12.39 3.96 20.20 8.68 20.20 8.68 23.32 3.96 23.32 3.96 35.37 0.00 35.37", "23.37 22.96 23.13 25.31 17.30 25.57 16.70 24.27 17.30 22.98 19.89 22.88 19.65 19.01 21.34 18.18 23.20 18.75 23.38 22.97 23.38 22.97", "23.66 30.96 23.45 32.17 23.05 33.18 22.47 33.99 21.71 34.63 20.78 35.11 18.41 35.57 17.13 35.52 15.47 34.94 14.54 34.19 13.77 33.16 12.71 30.17 12.16 20.39 12.70 17.72 13.64 15.93 14.86 14.86 16.17 14.29 18.23 14.06 20.22 14.45 20.67 14.66 21.86 15.65 22.93 17.69 23.19 18.75 19.65 19.01 19.69 19.35 19.20 17.76 18.90 17.37 18.55 17.10 18.15 16.95 17.45 16.95 17.22 17.00 16.64 17.35 16.36 17.76 16.06 18.69 16.01 23.09 17.30 23.01 17.30 25.58 18.00 25.55 18.00 25.58 16.16 25.68 16.59 30.57 17.09 31.87 17.45 32.27 17.90 32.50 18.94 32.58 19.28 32.49 19.76 32.21 20.02 31.91 20.37 30.99 20.42 28.94 23.64 28.77 23.67 30.97 23.67 30.97", "36.67 16.39 36.87 18.18 36.35 21.04 33.66 21.04 33.48 17.66 33.36 17.37 33.21 17.16 33.04 17.02 32.85 16.95 32.64 16.93 32.20 17.00 31.79 17.22 31.43 17.58 31.14 18.06 31.14 35.38 27.27 35.38 27.27 14.33 30.10 14.33 30.44 16.47 31.51 15.02 32.33 14.42 33.18 14.12 34.39 14.15 35.06 14.34 35.62 14.66 36.07 15.11 36.42 15.69 36.67 16.39 36.67 16.39", "48.67 16.16 48.96 17.94 48.59 20.82 45.90 20.96 45.54 17.59 45.40 17.31 45.24 17.10 45.06 16.97 44.87 16.91 44.66 16.91 44.22 16.99 43.83 17.23 43.49 17.61 43.22 18.10 44.13 35.40 40.27 35.60 39.17 14.59 41.99 14.44 42.44 16.56 43.43 15.05 44.22 14.41 45.05 14.07 46.26 14.03 46.94 14.19 47.52 14.48 47.99 14.90 48.37 15.46 48.65 16.15 48.65 16.15", "62.47 25.58 56.53 25.58 56.10 24.50 56.40 22.98 59.39 22.98 59.29 18.89 58.99 17.89 60.31 16.60 61.89 16.14 62.68 17.91 62.92 19.34 62.48 25.58 62.48 25.58", "56.39 22.97 56.53 25.57 55.50 25.57 55.67 30.47 55.85 31.22 56.26 32.03 56.44 32.21 56.88 32.47 57.43 32.60 58.25 32.54 58.74 32.28 58.88 32.14 59.24 31.60 59.41 31.10 59.56 29.06 62.78 29.06 62.43 32.45 61.98 33.44 61.36 34.23 60.56 34.82 59.61 35.26 58.50 35.50 55.93 35.46 54.81 35.09 53.84 34.45 52.71 32.94 51.81 29.90 51.77 20.10 52.45 17.46 53.48 15.72 54.76 14.71 56.10 14.22 58.18 14.10 59.19 14.25 60.58 14.82 61.71 15.86 61.86 16.12 58.96 17.87 58.94 17.82 58.66 17.42 58.32 17.12 57.93 16.95 57.48 16.90 57.00 16.95 56.59 17.13 56.41 17.27 56.10 17.67 55.75 18.57 55.48 22.95 56.37 22.95", "74.78 31.97 74.98 31.84 75.09 33.98 74.58 34.54 74.01 34.94 73.20 35.30 71.54 35.52 70.00 35.27 69.31 34.90 68.70 34.32 67.98 33.01 67.66 31.80 66.81 17.23 65.18 17.32 65.04 14.57 67.01 14.47 67.50 8.98 70.25 8.84 70.54 14.29 73.90 14.11 74.04 16.86 70.68 17.04 71.50 31.28 71.65 31.70 71.85 32.02 72.09 32.25 72.36 32.39 72.99 32.48 73.93 32.36 74.77 31.99 74.77 31.99", "94.65 19.37 97.23 9.27 102.29 9.27 102.29 35.36 98.59 35.36 99.00 14.97 98.71 14.97 94.77 32.00 92.27 32.00 88.30 14.97 88.01 14.97 88.42 35.36 84.72 35.36 84.72 9.27 89.88 9.27 93.46 25.43 93.58 25.43 94.65 19.36 94.65 19.36", "112.10 32.56 112.10 35.24 110.84 35.61 109.90 35.65 109.02 35.51 107.91 34.93 107.29 34.36 106.43 32.81 106.06 30.81 106.25 28.49 107.10 26.62 108.17 25.45 110.01 28.35 109.89 28.72 109.80 30.02 110.15 31.54 110.38 31.93 110.66 32.24 111.02 32.45 111.43 32.57 111.92 32.60 112.09 32.56 112.09 32.56", "117.57 35.05 114.71 35.20 114.34 33.41 113.66 34.27 112.74 34.97 112.11 35.24 111.26 33.94 112.11 32.56 112.50 32.47 113.30 31.99 113.64 31.63 113.29 25.06 111.43 26.18 110.53 27.20 109.94 28.66 110.03 28.36 107.85 26.22 108.19 25.46 113.17 22.48 112.81 18.08 112.66 17.65 112.42 17.31 112.10 17.07 111.67 16.93 110.92 16.93 110.52 17.02 110.15 17.20 109.67 17.65 109.43 18.09 109.16 19.34 109.21 21.09 106.26 21.24 105.89 19.18 105.93 18.07 106.17 17.08 106.62 16.23 107.23 15.51 107.99 14.94 109.96 14.21 112.55 14.08 113.74 14.29 114.69 14.66 115.44 15.23 116.01 15.98 116.65 18.02 117.60 35.05 117.60 35.05", "130.83 16.39 131.03 18.18 130.51 21.04 127.82 21.04 127.64 17.66 127.52 17.37 127.37 17.16 127.20 17.02 127.01 16.95 126.80 16.93 126.36 17.00 125.95 17.22 125.59 17.58 125.30 18.06 125.30 35.38 121.43 35.38 121.43 14.33 124.26 14.33 124.60 16.47 125.67 15.02 126.49 14.42 127.34 14.12 128.55 14.15 129.22 14.34 129.78 14.66 130.23 15.11 130.58 15.69 130.83 16.39 130.83 16.39", "145.47 14.04 141.30 23.90 147.01 35.03 143.07 35.24 138.10 25.05 137.98 25.05 138.53 35.48 134.67 35.68 133.22 7.93 137.08 7.73 137.92 23.70 138.04 23.70 141.77 14.24 145.48 14.05 145.48 14.05", "159.49 20.65 158.99 25.57 153.89 25.57 153.89 22.97 155.90 22.97 155.76 18.57 159.32 18.57 159.50 20.65 159.50 20.65", "156.08 29.06 159.30 29.06 158.94 32.45 158.50 33.44 157.87 34.23 157.08 34.82 156.13 35.26 153.75 35.60 152.46 35.47 150.84 34.81 149.96 34.02 149.24 32.94 148.34 29.90 148.30 20.10 148.97 17.46 150.01 15.72 151.29 14.71 152.63 14.22 154.71 14.10 156.67 14.58 157.89 15.47 158.55 16.35 159.28 18.36 159.31 18.58 156.69 18.74 155.79 18.85 155.45 17.83 155.18 17.43 154.84 17.13 154.45 16.96 153.75 16.92 153.52 16.96 153.11 17.14 152.76 17.46 152.49 17.94 152.12 19.41 152.00 22.97 154.27 22.97 154.27 25.57 152.00 25.57 152.17 30.47 152.61 31.80 152.76 32.03 153.15 32.35 153.64 32.54 154.41 32.59 154.76 32.53 155.25 32.27 155.52 31.97 155.92 31.08 156.07 29.04 156.07 29.04", "172.12 16.16 172.41 17.94 172.04 20.82 169.35 20.96 168.99 17.59 168.85 17.31 168.69 17.10 168.51 16.97 168.32 16.91 168.11 16.91 167.67 16.99 167.28 17.23 166.94 17.61 166.67 18.10 167.58 35.40 163.72 35.60 162.62 14.59 165.44 14.44 165.89 16.56 166.88 15.05 167.67 14.41 168.50 14.07 169.71 14.03 170.39 14.19 170.97 14.48 171.44 14.90 171.82 15.46 172.10 16.15 172.10 16.15", "188.88 26.92 185.09 26.04 185.54 24.62 188.52 26.68 188.87 26.92", "224.51 27.11 222.64 30.29 222.00 30.99 221.33 31.64 220.68 32.20 220.07 32.69 219.07 33.42 218.27 33.95 217.43 34.46 216.74 34.85 215.99 35.24 215.04 35.70 214.02 36.14 213.15 36.48 212.61 36.68 212.01 36.88 210.71 37.25 209.42 37.53 208.36 37.68 206.97 37.73 204.30 38.57 203.23 38.60 201.95 38.49 200.69 38.27 199.76 38.05 198.82 37.77 197.74 37.40 196.77 37.02 195.68 36.54 194.75 36.09 194.34 35.88 193.45 35.39 192.81 35.02 192.28 34.70 191.75 34.36 191.07 33.90 190.40 33.41 189.72 32.88 189.07 32.34 188.29 31.63 187.73 31.07 187.04 30.30 186.62 29.73 185.43 28.07 185.26 27.55 185.11 26.69 187.71 27.73 189.08 28.16 189.29 28.41 189.50 28.66 185.79 28.66 186.20 29.22 187.96 29.28 190.09 29.38 190.47 29.62 191.12 29.83 191.58 29.88 192.20 29.88 192.84 29.69 193.44 29.46 193.85 30.03 194.30 30.51 194.75 30.89 195.47 31.27 196.30 31.60 196.91 31.79 197.54 31.93 198.48 32.04 199.31 32.06 200.31 32.00 200.43 32.47 200.80 33.59 201.25 34.53 201.88 35.42 202.49 35.97 203.20 36.33 204.06 36.44 204.79 36.28 205.67 35.77 206.11 35.37 206.62 34.76 207.22 33.78 207.52 33.14 207.90 32.12 208.55 32.10 209.31 32.06 210.01 32.00 210.95 31.91 212.08 31.71 213.04 31.37 213.83 30.85 214.33 30.31 214.41 30.24 214.76 30.49 215.31 30.75 216.16 30.95 216.58 30.97 217.23 30.91 217.63 30.81 218.24 30.52 218.73 30.14 219.09 29.71 223.01 29.79 223.39 29.04 219.61 28.41 219.83 27.71 224.53 27.12", "218.55 3.29 217.72 4.54 216.99 4.19 216.16 3.82 214.76 3.29 214.04 3.05 213.05 2.76 212.23 2.55 210.93 2.27 209.82 2.09 208.77 1.96 207.60 1.86 206.26 1.80 204.10 1.82 202.62 1.91 201.56 2.02 199.10 2.40 196.24 3.07 195.14 2.34 195.13 2.34 195.08 2.17 195.97 1.85 197.30 1.43 198.43 1.13 199.89 0.82 201.00 0.63 202.86 0.40 204.93 0.27 206.75 0.27 208.34 0.35 209.84 0.50 211.42 0.75 212.36 0.94 213.82 1.31 214.88 1.64 216.43 2.23 218.56 3.30 218.56 3.30", "230.16 17.31 230.03 18.44 229.87 19.33 229.71 20.05 229.56 20.69 229.30 21.64 229.03 22.50 228.69 23.40 227.99 22.70 228.26 22.13 228.41 21.72 228.42 21.72 228.50 20.73 228.55 20.04 228.59 19.15 228.61 18.43 228.61 16.91 228.52 15.64 228.42 14.72 228.22 13.55 227.99 12.65 227.79 12.04 229.34 11.94 229.60 12.78 229.72 13.30 229.90 14.27 230.01 15.04 230.15 16.68 230.15 17.30 230.15 17.30", "213.04 30.73 212.42 31.03 212.06 31.15 211.58 31.27 210.66 31.41 209.90 31.46 209.21 31.46 208.69 31.46 207.75 31.41 207.13 31.18 206.70 31.02 206.06 30.79 205.40 30.58 204.99 30.47 204.28 30.34 203.36 30.30 202.06 30.53 201.72 30.64 200.98 30.95 200.59 31.07 199.86 31.24 198.84 31.37 198.31 31.39 197.58 31.36 196.85 31.25 196.18 31.07 195.50 30.78 195.85 30.16 196.10 29.83 196.47 29.43 197.15 28.93 198.14 28.93 197.59 28.71 198.19 28.54 198.67 28.44 199.06 28.36 199.21 28.33 199.53 28.27 199.97 28.19 200.50 28.09 200.76 28.39 201.06 28.68 201.32 28.89 201.78 29.19 202.13 29.36 202.57 29.51 203.30 29.63 203.83 29.63 204.39 29.52 205.08 29.26 205.61 28.94 206.11 28.52 206.48 28.11 206.95 27.40 207.61 27.46 208.05 27.53 208.77 27.67 209.43 27.86 209.56 28.14 209.79 28.43 210.09 28.70 209.82 28.81 209.69 28.86 209.31 29.02 209.35 29.33 209.79 29.33 209.80 29.30 210.28 29.12 210.28 29.12 210.55 28.81 210.36 28.40 210.44 28.30 210.80 28.51 211.19 28.78 211.46 28.99 211.76 29.25 212.29 29.79 212.55 30.10 213.00 30.73 213.00 30.73", "181.51 15.80 181.56 18.44 181.69 19.43 182.20 21.41 182.78 22.53 182.24 23.45 181.47 22.57 180.94 21.44 180.93 21.44 180.47 19.70 180.29 18.45 180.22 17.29 180.22 16.10 180.40 14.36 180.72 12.66 181.01 11.57 181.34 10.55 182.30 8.32 183.36 9.13 182.86 10.32 182.43 11.58 182.12 12.65 181.84 13.77 181.51 15.81 181.51 15.81", "203.37 24.90 203.22 24.74 203.92 24.67 204.62 24.64 205.11 24.67 205.50 24.75 205.93 24.95 206.33 25.43 205.78 25.49 205.17 25.56 204.50 25.58 203.95 25.46 203.57 25.21 203.37 24.90 203.37 24.90", "201.22 25.19 201.04 25.19 201.23 25.01 201.41 24.88 201.73 24.75 202.08 24.75 201.80 24.92 201.22 25.18 201.22 25.18", "213.76 19.20 213.81 19.57 213.73 19.85 213.63 20.00 213.25 19.94 212.94 19.94 212.81 19.95 212.46 20.03 212.36 19.87 212.30 19.68 212.28 19.45 212.31 19.22 212.48 18.87 212.61 18.73 212.62 18.73 212.74 18.65 213.22 18.62 213.39 18.69 213.59 18.86 213.76 19.20 213.76 19.20", "195.90 19.15 195.68 19.55 195.38 19.40 195.01 19.30 194.80 19.27 194.51 19.27 194.44 18.96 194.50 18.63 194.77 18.28 195.12 18.12 195.37 18.12 195.69 18.28 195.83 18.47 195.92 18.74 195.90 19.13 195.90 19.13", "224.54 26.21 232.13 25.83 224.58 26.87 224.54 26.21", "223.37 29.03 228.30 29.82 222.94 29.78 223.37 29.03", "224.92 23.78 224.35 23.61 227.53 22.30 224.92 23.79", "179.63 28.81 185.78 28.65 186.19 29.21 179.63 28.81", "185.09 26.04 185.09 26.68 178.07 24.37 185.09 26.04", "228.00 22.70 228.70 23.40 228.33 24.00 227.75 24.61 227.18 24.82 226.40 24.94 225.56 24.85 224.67 24.54 224.51 24.51 224.35 24.47 224.31 24.34 224.54 26.20 220.05 26.45 224.92 23.78 225.59 23.99 226.54 23.94 227.17 23.66 227.63 23.25 227.98 22.70", "223.25 22.87 224.35 23.61 220.01 25.05 220.05 24.46 219.90 23.98 219.66 23.42 219.37 22.90 219.03 22.44 218.50 21.88 217.96 21.45 217.40 21.23 216.59 21.07 215.72 21.06 215.65 20.22 215.47 19.41 215.21 18.74 214.41 17.68 213.53 17.25 212.39 17.37 211.51 17.87 211.20 18.46 211.02 19.57 211.00 20.55 211.05 21.50 211.14 22.41 211.29 23.40 212.07 24.11 212.49 24.52 212.50 24.52 212.99 25.07 213.22 25.36 213.62 25.89 213.95 26.37 214.19 26.84 215.00 26.80 215.92 26.75 217.15 26.68 216.43 27.26 215.53 27.98 215.09 28.33 214.39 28.89 214.18 29.57 213.52 30.40 213.03 30.77 212.32 29.83 211.89 29.39 211.21 28.82 210.91 28.61 210.45 28.34 210.58 28.16 210.58 28.16 210.64 27.92 210.63 27.92 210.63 27.88 210.60 27.83 210.59 27.83 210.08 27.74 209.73 27.80 209.45 27.91 208.79 27.72 208.38 27.63 207.63 27.51 206.97 27.45 207.29 26.72 207.37 26.38 207.37 25.61 206.99 24.75 206.50 24.26 205.77 23.88 205.19 23.74 205.19 23.74 203.73 23.57 202.68 23.61 202.07 23.70 201.32 23.91 200.28 24.50 199.77 25.21 199.68 26.29 199.93 27.10 200.32 27.84 200.33 27.84 200.52 28.10 199.84 28.23 199.23 28.35 198.47 28.50 197.60 28.73 197.39 28.58 197.34 28.44 198.02 27.64 197.39 27.38 196.94 27.79 196.89 28.45 197.16 28.96 196.71 29.26 196.30 29.64 195.97 30.05 195.73 30.42 195.52 30.81 194.67 30.22 194.01 29.47 193.70 28.87 193.55 28.11 190.79 26.13 193.77 26.36 194.35 25.10 194.81 24.41 195.47 23.79 196.48 22.96 196.90 22.61 197.18 20.11 197.26 18.68 197.12 17.70 196.77 17.07 196.29 16.81 195.67 16.63 195.08 16.61 194.41 16.74 193.86 17.05 193.53 17.42 193.16 18.32 192.94 19.32 192.85 20.22 192.16 20.32 191.64 20.47 191.18 20.65 190.50 21.04 190.01 21.43 189.50 22.02 189.02 22.70 188.75 23.37 188.63 23.96 188.54 24.65 188.51 25.11 188.00 24.92 187.10 24.63 185.76 24.18 185.76 24.04 185.59 24.09 185.01 23.84 185.64 23.48 186.22 23.04 186.46 22.13 186.93 20.89 187.36 19.80 187.82 18.34 189.41 8.10 188.79 7.53 188.21 7.25 187.58 7.10 186.93 7.07 186.17 7.17 185.58 7.34 185.58 7.34 185.18 7.53 184.68 7.81 184.21 8.14 183.79 8.54 183.36 9.15 182.30 8.34 182.83 7.59 183.24 7.16 183.62 6.83 183.93 6.61 184.52 6.28 185.00 6.08 185.76 5.87 186.70 5.78 187.67 5.86 188.35 6.03 189.10 6.33 189.47 5.34 189.94 4.62 190.65 4.05 191.51 3.62 192.55 3.21 193.59 2.82 194.50 2.45 195.08 2.20 195.13 2.37 195.14 2.37 196.24 3.10 195.10 3.52 194.34 3.83 193.46 4.26 192.60 4.78 191.62 5.50 191.07 6.34 190.84 7.26 190.68 8.43 190.60 9.02 190.42 10.07 190.95 10.07 191.47 9.76 191.47 9.76 192.20 9.19 193.05 8.55 193.05 8.55 194.03 8.06 195.41 7.59 196.26 7.42 197.03 7.34 197.93 7.34 197.94 7.34 198.24 7.34 198.24 7.37 199.73 7.93 200.44 8.74 200.82 9.88 200.90 11.44 200.79 12.65 200.58 13.94 200.40 14.85 200.15 16.02 199.93 17.07 199.66 18.48 199.53 19.37 199.47 20.22 199.47 20.66 199.69 21.78 200.11 22.06 200.73 22.14 201.56 22.12 202.59 22.02 204.06 21.89 205.46 22.08 206.07 22.13 206.89 21.95 207.25 21.40 207.40 20.34 207.21 19.35 206.86 18.39 206.63 17.86 206.35 17.25 206.04 15.48 205.94 14.45 205.91 13.54 205.99 12.25 206.30 10.76 207.15 9.01 207.84 8.25 208.72 8.13 209.93 8.04 210.62 8.02 212.13 8.07 212.92 8.14 213.82 8.27 215.21 8.55 215.94 8.74 217.08 9.10 218.09 9.48 218.76 9.92 219.20 10.35 219.66 10.89 220.00 11.33 220.31 10.93 220.53 10.03 220.64 9.05 220.64 8.27 220.55 7.66 220.43 7.19 219.79 6.07 219.35 5.65 218.80 5.23 218.22 4.86 217.73 4.58 218.56 3.33 219.00 3.63 219.47 3.99 220.00 4.45 220.35 4.80 220.64 5.12 221.18 5.79 221.64 6.49 222.03 7.30 223.94 7.36 225.11 7.68 226.28 8.26 227.12 8.88 227.95 9.70 228.55 10.68 229.35 11.99 228.57 12.01 227.81 12.09 227.50 11.28 227.01 10.29 226.98 10.29 226.72 9.92 226.72 9.86 226.68 9.86 225.78 8.97 225.77 8.97 225.42 8.80 225.42 8.80 224.47 8.62 223.57 8.68 223.56 8.68 223.19 8.77 223.18 8.77 223.17 8.78 222.78 8.95 222.75 8.95 222.19 9.38 221.54 10.15 221.11 10.91 220.72 12.06 222.80 22.54 223.28 22.91", "184.99 24.20 184.65 24.55 184.24 24.44 183.61 24.25 182.87 23.89 182.23 23.46 182.77 22.54 183.22 23.09 183.35 23.21 184.31 23.86 184.98 24.21", "224.92 23.78 224.92 23.78 224.35 23.61 224;92 23.78"];

	function hexToArray(hexString) { 
		var hexColor = hexString.replace("#", "");
		var r = parseInt(hexColor.slice(0, 2), 16) / 255;
		var g = parseInt(hexColor.slice(2, 4), 16) / 255;
		var b = parseInt(hexColor.slice(4, 6), 16) / 255;
		return [r, g, b, 1];
	}

	function vecToPoints(vecCoord) { //turns the headerVec coordinates into points. This method is copied from BattleStyle_Tester script by adamplouff https://github.com/adamplouff/scriptui-battlestyle
		var points = [];
		var n;
		for (var i = 0; i < vecCoord.length; i++) {
			var eachNum = vecCoord[i].split(/[\s,]/);
			var coordinates = [];
			var sets = [];
			for (var k = 0; k < eachNum.length; k += 2) {
				sets.push(eachNum[k] + "," + eachNum[k + 1]);
			}
			for (var j = 0; j < sets.length; j++) {
				n = sets[j].split(",");
				coordinates[j] = n;
				coordinates[j][0] = parseFloat(coordinates[j][0]);
				coordinates[j][1] = parseFloat(coordinates[j][1]);
			}
			points.push(coordinates);
		}
		return points;
	}

	function vecDraw() { 
		this.graphics.drawOSControl();
		this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
		this.graphics.fillPath(this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [0, 0, 0, 0]));
		try {
			for (var i = 0; i < this.coord.length; i++) {
				var line = this.coord[i];
				this.graphics.newPath();
				this.graphics.moveTo(line[0][0], line[0][1]);
				for (var j = 0; j < line.length; j++) {
					this.graphics.lineTo(line[j][0], line[j][1]);
				}
				this.graphics.fillPath(this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToArray(this.iconColor)));
			}
		} catch (e) {}
	}

	function buttonColorVector(parentObj, iconVec, size, staticColor, hoverColor) {
		var btn = parentObj.add("button", [0, 0, size[0], size[1], undefined]);
		btn.coord = vecToPoints(iconVec);
		btn.iconColor = staticColor;
		btn.artSize = size;
		btn.onDraw = vecDraw;
		if (hoverColor) {
			try {
				btn.addEventListener("mouseover", function () {
					updateVectorButtonOnHover(this, iconVec, hoverColor, size);
				});
				btn.addEventListener("mouseout", function () {
					updateVectorButtonOnHover(this, iconVec, staticColor, size);
				});
			} catch (err) {}
		}
		return btn;
	}

	function updateVectorButtonOnHover(btn, iconVec, iconColor, size) {
		btn.iconColor = iconColor;
		btn.artSize = size;
		btn.onDraw = vecDraw;
		return btn;
	}

	var content = group0.add("group"); // scriptUI code was generated by jonaspaakko's scriptUI builder tool on https://scriptui.joonas.me/
	content.alignChildren = ["left", "center"];
	content.alignement = ["left", "center"];
	content.orientation = "column";
	content.margins = 2;
	content.spacing = 2;
	var ferret_button_group = content.add("group");
	ferret_button_group.margins = [0, 0, 0, 0];
	var btn_url = buttonColorVector(ferret_button_group, headerVec, [0, 0], "B7B7B7", "E7E7E7");
	btn_url.minimumSize.width = 231;
	btn_url.minimumSize.height = 39;
	
	var group2 = win.add("group", undefined, {
		name: "group2",
	});
	group2.orientation = "row";
	group2.alignChildren = ["left", "center"];
	group2.spacing = 3;
	group2.margins = 0;
	group2.alignment = ["left", "top"];
	var statictext3 = group2.add("statictext", undefined, undefined, {
		name: "statictext3",
	});
	statictext3.text = "Sampling Method";
	var dropdown1_array = ["Linear", "Cubic Spline", "Rounded Linear", "Rounded Cubic Spline"];
	var dropdown1 = group2.add("dropdownlist", undefined, undefined, {
		name: "dropdown1",
		items: dropdown1_array,
	});
	dropdown1.selection = 0;
	dropdown1.preferredSize.width = 143;
	var group3 = win.add("group", undefined, {
		name: "group3",
	});
	group3.orientation = "column";
	group3.alignChildren = ["left", "center"];
	group3.spacing = 3;
	group3.margins = 0;
	group3.alignment = ["left", "top"];
	var group4 = group3.add("group", undefined, {
		name: "group4",
	});
	group4.orientation = "row";
	group4.alignChildren = ["center", "center"];
	group4.spacing = 3;
	group4.margins = 0;
	group4.alignment = ["left", "center"];
	var statictext4 = group4.add("statictext", undefined, undefined, {
		name: "statictext4",
	});
	statictext4.helpTip = "To merge close instances within the timeline.";
	statictext4.text = "Merging Threshold (in frames)";
	statictext4.alignment = ["left", "center"];
	var edittext15 = group4.add('edittext {properties: {name: "edittext15"}}');
	edittext15.justify = "left";
	edittext15value = 1.001;
	edittext15.preferredSize.width = 81;
	edittext15.text = edittext15value.toFixed(2);
	var slider1 = group3.add("slider", undefined, undefined, undefined, undefined, "1.01");
	slider1.minvalue = 0.1;
	slider1.maxvalue = 10;
	slider1.value = 1;
	slider1.preferredSize.width = 235;
	slider1.alignment = ["left", "center"];
	slider1.onChanging = function () {
		edittext15.text = slider1.value.toFixed(2);
	};
	edittext15.onChanging = function () {
		var inputValue = parseFloat(edittext15.text);
		if (!isNaN(inputValue)) {
			if (inputValue < slider1.minvalue) {
				inputValue = slider1.minvalue;
			} else if (inputValue > slider1.maxvalue) {
				inputValue = slider1.maxvalue;
			}
			slider1.value = inputValue;
		}
	};
	var group7 = win.add("group", undefined, {
		name: "group7",
	});
	group7.orientation = "row";
	group7.alignChildren = ["left", "center"];
	group7.spacing = 3;
	group7.margins = 0;
	group7.alignment = ["left", "top"];
	var statictext8 = group7.add("statictext", undefined, undefined, {
		name: "statictext8",
	});
	statictext8.helpTip = "Choose your variables and separate them with comas.";
	statictext8.text = "Label" + " ";
	statictext8.alignment = ["left", "center"];
	var edittext2 = group7.add('edittext {properties: {name: "edittext2"}}');
	edittext2.helpTip = "Choose your variables and separate them with comas.";
	edittext2.text = "propertyName, equals, value";
	edittext2.preferredSize.width = 203;
	edittext2.alignement = ["left", "center"];
	var group1 = win.add("group", undefined, {
		name: "group1",
	});
	group1.orientation = "row";
	group1.alignChildren = ["left", "center"];
	group1.spacing = 3;
	group1.margins = 0;
	group1.alignment = ["left", "top"];
	var statictext2 = group1.add("statictext", undefined, undefined, {
		name: "statictext2",
	});
	statictext2.text = "Target Value";
	var edittext1a = group1.add('edittext {properties: {name: "edittext1a", multiline: false}}');
	edittext1a.preferredSize.width = 54;
    edittext1a.helpTip="X";
	var edittext1b = group1.add('edittext {properties: {name: "edittext1b", multiline: false}}');
	edittext1b.preferredSize.width = 54;
    edittext1b.helpTip="Y";
	var edittext1c = group1.add('edittext {properties: {name: "edittext1c", multiline: false}}');
	edittext1c.preferredSize.width = 53;
    edittext1c.helpTip="Z";

	var group5 = win.add("group", undefined, {
		name: "group5",
	});
	group5.orientation = "row";
	group5.alignChildren = ["left", "center"];
	group5.spacing = 3;
	group5.margins = 0;
	group5.alignment = ["left", "top"];
	var statictext6 = group5.add("statictext", undefined, undefined, {
		name: "statictext6",
	});
	statictext6.text = "Add Markers on";
	var radiobutton2 = group5.add("radiobutton", undefined, undefined, {
		name: "radiobutton2",
	});
	radiobutton2.text = "Layer";
	radiobutton2.value = true;
	var radiobutton1 = group5.add("radiobutton", undefined, undefined, {
		name: "radiobutton1",
	});
	radiobutton1.text = "Composition";
	var divider1 = win.add("panel", undefined, undefined, {
		name: "divider1",
	});
	divider1.alignment = ["left", "top"];
	divider1.visible = false;
	divider1.preferredSize.width = 235;
	var buttons = win.add("group", undefined, undefined, {
		name: "buttons",
	});
	buttons.orientation = "row";
	buttons.alignChildren = ["left", "center"];
	buttons.spacing = 2.77;
	buttons.margins = 0;
	buttons.alignment = ["left", "top"];
	var button1 = buttons.add("button", undefined, {
		name: "button1",
	});
	button1.text = "Add";
	button1.preferredSize.width = 57;
	button1.preferredSize.height = 39;
	button1.helpTip = "Add Markers";
	var button2 = buttons.add("button", undefined, {
		name: "button2",
	});
	button2.text = "Swap";
	button2.preferredSize.width = 57;
	button2.preferredSize.height = 39;
	button2.helpTip = "Replace Markers";
	var button3 = buttons.add("button", undefined, {
		name: "button3",
	});
	button3.text = "Delete";
	button3.preferredSize.width = 57;
	button3.preferredSize.height = 39;
	button3.helpTip = "Delete Markers";
    var button4 = buttons.add("button", undefined, {
		name: "button4",
	});
	button4.text = "Help";
	button4.preferredSize.width = 57;
	button4.preferredSize.height = 39;

    button4.onClick = function () {
		var panelNotGlobal;
		var helpwin =
			panelNotGlobal instanceof Panel
				? panelNotGlobal
				: new Window("palette", undefined, undefined, {
						borderless: false,
						resizeable: false,
					});
		if (!(panelNotGlobal instanceof Panel)) helpwin.text = "Ferret Marker Help";
		helpwin.preferredSize.width = 235;
		helpwin.orientation = "column";
		helpwin.alignChildren = ["left", "center"];
		helpwin.spacing = 0;
		helpwin.margins = 5;
		var statictext1 = helpwin.add("group", undefined, {
			name: "statictext1",
		});
		statictext1.getText = function () {
			var t = [];
			for (var n = 0; n < statictext1.children.length; n++) {
				var text = statictext1.children[n].text || "";
				if (text == "") text = " ";
				t.push(text);
			}
			return t.join("\n");
		};
		statictext1.orientation = "column";
		statictext1.alignChildren = ["left", "center"];
		statictext1.spacing = 0;
		statictext1.add("statictext", undefined, "Ferret Marker is a tool designed to find and mark");
		statictext1.add("statictext", undefined, "specific events within  your timeline.");
		statictext1.add("statictext", undefined, "Select any property within the timeline and enter");
		statictext1.add("statictext", undefined, "a target value. Ferret Marker will quickly locate");
		statictext1.add("statictext", undefined, "all the instances and add markers on them.");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Here is a comprehensive breakdown of");
		statictext1.add("statictext", undefined, "Ferret Marker's settings: ");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Target Value: This is the specific value you want");
		statictext1.add("statictext", undefined, "to identify instances of in your timeline.");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Interpolation Method: Ferret Marker lets you choose");
		statictext1.add("statictext", undefined, "between two timeline analysis methods:");
		statictext1.add("statictext", undefined, "Linear: a generic and very stable resarch method.");
		statictext1.add("statictext", undefined, "Cubic Spline: Slower but more accurate results on");
		statictext1.add("statictext", undefined, "Math.sin() expressions or keyframes set with");
		statictext1.add("statictext", undefined, "temporal interpolation. (Easy Ease)");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Merging Threshold: The merging threshold allows");
		statictext1.add("statictext", undefined, "you to specify a distance or range within which");
		statictext1.add("statictext", undefined, "instances should be considered as a single");
		statictext1.add("statictext", undefined, "marker, avoiding the creation of multiple");
		statictext1.add("statictext", undefined, "markers for closely spaced instances. ");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Label: The variables you may use are:");
		statictext1.add("statictext", undefined, "index, layerName, propertyName, equals, value.");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "The label textbox allows you to arrange words");
		statictext1.add("statictext", undefined, "and variables in any specific order. You can enter");
		statictext1.add("statictext", undefined, "the variables above but you can also write");
		statictext1.add("statictext", undefined, "your own words like 'Boom' or 'Hot chili sauce'.");
		statictext1.add("statictext", undefined, "Make sure to separate them with commas.");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "Tip: Ferret Markers can handle heavy selections");
		statictext1.add("statictext", undefined, "of multiple properties at once! If it lags, don't kill");
		statictext1.add("statictext", undefined, "After Effects, just wait for it to execute all the");
		statictext1.add("statictext", undefined, "calculations that, in some cases, take more time.");
		statictext1.add("statictext", undefined, "");
		statictext1.add("statictext", undefined, "More info on https://aescripts.com/ferret-marker/");
		helpwin.show();
	};

	function run(edittext1a, dropdown1, edittext15, radiobutton1, edittext2, replacing, deleting, comp, savedSelectedProperties, selectedLayers, markerToComp, savedSelectedProperWithoutKeyframes, savedSelectedPropertiesWithKeyframes, selectedKeysLength, savedSelectedKeyframes) {
		var value = edittext1a.text;
        var regex = /,|\./g; // does it contain a dot and a comma ?
        var result = value.match(regex);
		if ((value.match(/,/g) || []).length > 1 || (value.match(/\./g) || []).length > 1 || result && result.length > 1 ) { // if user enters incorrect decimal punctuation, return "schtroumpf" that will lead to an Target Value: invalid format alert after some checks.
			value = "schtroumpf";
		} else {
			value = parseFloat(value.replace(",", "."));
		}
        
		var value1 = edittext1b.text; // if user enters  incorrect decimal punctuation, return "schtroumpf" that will lead to an Target Value: invalid format alert after some checks.
        var result1 = value1.match(regex);
		if ((value1.match(/,/g) || []).length > 1 || (value1.match(/\./g) || []).length > 1  || result1 && result1.length > 1 ) {
			value1 = "schtroumpf";
		} else {
			value1 = parseFloat(value1.replace(",", "."));
		}
        
		var value2 = edittext1c.text; // if user enters incorrect decimal punctuation, return "schtroumpf" that will lead to an Target Value: invalid format alert after some checks.
        var result2 = value2.match(regex);
		if ((value2.match(/,/g) || []).length > 1 || (value2.match(/\./g) || []).length > 1  || result2 && result2.length > 1 ) {
			value2 = "schtroumpf";
		} else {
			value2 = parseFloat(value2.replace(",", "."));
		}

		function isInvalidInput(input) { //if the user entry is not a number, return "schtroumpf"
			return /[a-zA-Z!@#$;%^&*()?":{}|<>]/.test(input);
		}

		if (isInvalidInput(edittext1a.text) || isInvalidInput(edittext1b.text) || isInvalidInput(edittext1c.text)) { 
			value = "schtroumpf";
		} else {
			var combinedValues = [value, value1, value2];
			var indexToLookAt = []; //indexToLookAt refers to the chosen dimension

			for (var i = 0; i < combinedValues.length; i++) {
				if (!isNaN(combinedValues[i])) {
					indexToLookAt.push(i);
				}
			}

			if (indexToLookAt.length == 1) {
				value = combinedValues[indexToLookAt[0]];
			} else if (indexToLookAt.length == 2) {
				value = [combinedValues[indexToLookAt[0]], combinedValues[indexToLookAt[1]]];
			} else if (indexToLookAt.length == 3) {
				value = combinedValues;
			}
		}

		var userChoice = parseFloat(dropdown1.selection) + 1; // sampling method dropdown menu
		var mergingthreshold = parseFloat(edittext15.text.replace(",", "."));
		var userInput = edittext2.text; // Label edit box
		var fps = comp.frameRate;
		var nbofframes = comp.duration * fps;
		var framesarray = []; // example: if there are 10 frames in total, the framesrray will be [1,2,3,4,5,6,7,8,9,10]
		for (var i = 0; i < nbofframes; i++) {
			framesarray.push(i);
		}

		function toLabel(userInput, value, index, layerName, equals, propertyName) { //to return a label for marker creation
			if (userInput) {
				userInput.replace(/^\s+|\s+$/g, "");
				var variableNames = userInput.split(",");
				var fullLabel = "";
				for (var i = 0; i < variableNames.length; i++) {
					var variableName = variableNames[i].replace(/^\s+|\s+$/g, "");
					switch (variableName) {
						case "propertyName":
							fullLabel += propertyName;
							break;
						case "layerName":
							fullLabel += layerName;
							break;
						case "value":
							fullLabel += value;
							break;
						case "index":
							fullLabel += index + 1;
							break;
						case "equals":
							fullLabel += equals;
							break;
						default:
							fullLabel += variableName;
							break;
					}
					if (i < variableNames.length - 1) {
						fullLabel += " ";
					}
				}
				return fullLabel;
			} else {
				return "";
			}
		}

		function isStatic(selectedProperty, nbofframes, comp, indexToLook) { // is the property static or animated ? returns true or false. If true then it will skip the interpolation part and use a faster static research method.
			if (selectedProperty.value instanceof Array) {
				var initialValue = parseFloat(selectedProperty.valueAtTime(0, false)[indexToLook]);

				for (var i = 0; i <= nbofframes; i++) {
					var valueAtFrame = parseFloat(selectedProperty.valueAtTime(i * comp.frameDuration, false)[indexToLook]);
					if (valueAtFrame !== initialValue) {
						return false;
					}
				}
				return true;
			} else {
				var initialValue = parseFloat(selectedProperty.valueAtTime(0, false));
				for (var i = 0; i <= nbofframes; i++) {
					var valueAtFrame = parseFloat(selectedProperty.valueAtTime(i * comp.frameDuration, false));
					if (valueAtFrame !== initialValue) {
						return false;
					}
				}
				return true;
			}
		}

		function cubicSplineInterpolation(userInput, value, values, framesarray, selectedLayer, selectedProperty, comp, instants, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook) {
			if (values[0] == value) {
				instants.push(framesarray[0]);
			}

			function getPrecision(value) { // amount of decimals found in the target value
				var valueString = value.toString();
				var decimalIndex = valueString.indexOf(".");
				if (decimalIndex == -1) {
					return 0;
				} else {
					return valueString.length - decimalIndex - 1;
				}
			}
			while (values.length > 1) { //cubic spline interpolation method
				var n = values.length;
				var h = [];
				for (var i = 0; i < n - 1; i++) {
					h[i] = framesarray[i + 1] - framesarray[i];
				}
				var alpha = [];
				alpha[n - 1] = 0;
                var strength = 3; // increase or decrease strength to exaggerate the cubic spline shape.
				for (var i = n - 2; i >= 1; i--) {
					alpha[i] = strength * (values[i + 1] - 2 * values[i] + values[i - 1]); 
				}
				alpha[0] = 0;
				var c = [];
				var l = [];
				var mu = [];
				c[n - 1] = 0;
				l[n - 1] = 1;
				mu[n - 1] = 0;
				for (var i = n - 2; i >= 1; i--) {
					l[i] = 2 * (h[i] + h[i - 1]) - h[i] * mu[i + 1];
					mu[i] = h[i] / l[i];
					c[i] = (alpha[i] - h[i] * c[i + 1]) / l[i];
				}
				c[0] = 0;
				var b = [];
				var d = [];
				for (var j = 0; j <= n - 2; j++) {
					b[j] = (values[j + 1] - values[j]) / h[j] - (h[j] * (c[j + 1] + 2 * c[j])) / 3;
					d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
				}
				var newInstants = [];
				var precision = getPrecision(value);
				var calculus = Math.pow(10, -precision) / 10;
				var min = 0.01;
				var max = 1;
				var timeStep = Math.min(Math.max(calculus, min), max); //timestep : time span between interpolated values. Time span is proportionate to the amount of decimals in the target value. Less decimals = faster processing
				var timeStepped = timeStep;
				for (var j = 0; j < n - 1; j++) {
					var A = values[j];
					var B = b[j];
					var C = c[j];
					var D = d[j];
					for (var t0 = 0; t0 < 1; t0 += timeStepped) {
						var t1 = t0 + timeStepped;
						var x0 = A + B * t0 + C * t0 * t0 + D * t0 * t0 * t0;
						var x1 = A + B * t1 + C * t1 * t1 + D * t1 * t1 * t1;
						if (value >= Math.min(x0, x1) && value <= Math.max(x0, x1)) {
							var frame = framesarray[j] + ((t0 + t1) * h[j]) / 2;
							var isFound = false;
							for (var k = 0; k < instants.length; k++) {
								if (instants[k] == frame) {
									isFound = true;
									break;
								}
							}
							if (!isFound) {
								newInstants.push(frame);
							}
						}
					}
				}
				instants = instants.concat(newInstants); // the array containing the time instances in which the target value was found
				values = values.slice(n);
				framesarray = framesarray.slice(n);
			}
			for (var i = 0; i < values.length; i++) {
				if (Math.abs(values[i] - values[i - 1]) < indiceEloignement) {
					framesarray.splice(i, 1); 
					values.splice(i, 1);
					i--;
				}
			}
			var uniqueInstants = [];
			var lastInstant = null; 
			for (var i = 0; i < instants.length; i++) { 
				if (instants[i] !== lastInstant) {
					uniqueInstants.push(instants[i]); 
					lastInstant = instants[i]; // to push the last instant into the array
				}
			}
			var finalInstants = [uniqueInstants[0]]; 
			for (var i = 0; i < uniqueInstants.length; i++) {
				var ouw = (uniqueInstants[i] - uniqueInstants[i - 1]) / mergingthreshold;
				if (ouw >= 1) {
					finalInstants.push(uniqueInstants[i]); // to remove invasive duplicate instants
				}
			}
			if (isRound == true) { // if rounded method is selected in the dropdown list, set markers above frames
				if (finalInstants.length > 0 && !isNaN(finalInstants[0])) {
					if (replacing && !markerToComp) {
						var numMarkers = selectedLayer.property("ABDE Marker").numKeys;

						for (var j = numMarkers; j > 0; j--) {
							selectedLayer.property("ABDE Marker").removeKey(j);
						}
					}
					if (replacing && markerToComp) { // if "Swap Markers" clicked and "Composition" checked
						var compMarkers = comp.markerProperty;
						for (var i = compMarkers.numKeys; i > 0; i--) {
							compMarkers.removeKey(i);
						}
					}
                    // removing keyframes'downside is that it deselects everything. The following method reset the initial user selection including the keyframes.
					for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
						savedSelectedProperWithoutKeyframes[jackma].selected = true;
					}
					for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
						for (j = 0; j < selectedKeysLength[i]; j++) {
							savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
						}
					}

					for (var i = 0; i < finalInstants.length; i++) {
						var index = i;
						if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
							var propertyName = selectedProperty.name + "_" + indexToLook;
						} else {
							var propertyName = selectedProperty.name;
						}
						var equals = "=";
						var layerName = selectedLayer.name;
						var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);
						if (markerToComp == false) {
							selectedLayer.property("ADBE Marker").setValueAtTime(Math.round(finalInstants[i]) * comp.frameDuration, new MarkerValue(fullLabel)); //adding markers
						} else {
							comp.markerProperty.setValueAtTime(Math.round(finalInstants[i]) * comp.frameDuration, new MarkerValue(fullLabel));//adding markers
						}
					}
				} else {
					var name = selectedProperty.name;
					if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
						var propertyName = selectedProperty.name + "_" + indexToLook;
					} else {
						var propertyName = selectedProperty.name;
					}

					alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
				}
			} else {
				if (finalInstants.length > 0 && !isNaN(finalInstants[0])) {
					if (replacing && !markerToComp) {
						var numMarkers = selectedLayer.marker.numKeys;

						for (var j = numMarkers; j > 0; j--) {
							selectedLayer.marker.removeKey(j);
						}
					}
					if (replacing && markerToComp) {
						var compMarkers = comp.markerProperty;
						for (var i = compMarkers.numKeys; i > 0; i--) {
							compMarkers.removeKey(i);
						}
					}

					for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
						savedSelectedProperWithoutKeyframes[jackma].selected = true;
					}
					for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
						for (j = 0; j < selectedKeysLength[i]; j++) {
							savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
						}
					}

					for (var i = 0; i < finalInstants.length; i++) {
						var index = i;
						if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
							var propertyName = selectedProperty.name + "_" + indexToLook;
						} else {
							var propertyName = selectedProperty.name;
						}
						var equals = "=";
						var layerName = selectedLayer.name;
						var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);
						if (markerToComp == false) {
							selectedLayer.property("ADBE Marker").setValueAtTime(finalInstants[i] * comp.frameDuration, new MarkerValue(fullLabel));
						} else {
							comp.markerProperty.setValueAtTime(finalInstants[i] * comp.frameDuration, new MarkerValue(fullLabel));
						}
					}
				} else {
					var name = selectedProperty.name;
					if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
						var propertyName = selectedProperty.name + "_" + indexToLook;
					} else {
						var propertyName = selectedProperty.name;
					}

					alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
				}
			}
		}
		function linearInterpolation(userInput, value, values, comp, instants, framesarray, selectedLayer, selectedProperty, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook) {
			if (values[0] == value) {
				instants.push(framesarray[0]);
			}
			for (var i = 0; i < framesarray.length - 1; i++) {
				var startFrame = framesarray[i];
				var endFrame = framesarray[i + 1];
				var startValue = values[i];
				var endValue = values[i + 1];
				if ((value >= startValue && value <= endValue) || (value <= startValue && value >= endValue)) {
					var t = (value - startValue) / (endValue - startValue);
					var frame = startFrame + t * (endFrame - startFrame);
					instants.push(frame);
				}
			}

			var uniqueInstants = [];
			var lastInstant = null;
			for (var i = 0; i < instants.length; i++) {
				if (instants[i] !== lastInstant) {
					uniqueInstants.push(instants[i]);
					lastInstant = instants[i];
				}
			}
			var finalInstants = [uniqueInstants[0]];
			for (var i = 0; i < uniqueInstants.length; i++) {
				var ouw = (uniqueInstants[i] - uniqueInstants[i - 1]) / mergingthreshold;
				if (ouw >= 1) {
					finalInstants.push(uniqueInstants[i]);
				}
			}
			var savedSelectedProperty = selectedProperty;

			if (isRound == true) {
				if (finalInstants.length > 0 && !isNaN(finalInstants[0])) {
					if (replacing && !markerToComp) {
						var numMarkers = selectedLayer.marker.numKeys;

						for (var j = numMarkers; j > 0; j--) {
							selectedLayer.marker.removeKey(j);
						}
					}
					if (replacing && markerToComp) {
						var compMarkers = comp.markerProperty;
						for (var i = compMarkers.numKeys; i > 0; i--) {
							compMarkers.removeKey(i);
						}
					}

					for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
						savedSelectedProperWithoutKeyframes[jackma].selected = true;
					}
					for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
						for (j = 0; j < selectedKeysLength[i]; j++) {
							savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
						}
					}

					for (var i = 0; i < finalInstants.length; i++) {
						var index = i;
						if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
							var propertyName = selectedProperty.name + "_" + indexToLook;
						} else {
							var propertyName = selectedProperty.name;
						}
						var equals = "=";
						var layerName = selectedLayer.name;
						var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);
						if (markerToComp == false) {
							selectedLayer.property("ADBE Marker").setValueAtTime(Math.round(finalInstants[i]) * comp.frameDuration, new MarkerValue(fullLabel));
						} else {
							comp.markerProperty.setValueAtTime(Math.round(finalInstants[i]) * comp.frameDuration, new MarkerValue(fullLabel));
						}
					}
				} else {
					var name = selectedProperty.name;
					if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
						var propertyName = selectedProperty.name + "_" + indexToLook;
					} else {
						var propertyName = selectedProperty.name;
					}

					alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
				}
			} else {
				if (finalInstants.length > 0 && !isNaN(finalInstants[0])) {
					if (replacing && !markerToComp) {
						var numMarkers = selectedLayer.marker.numKeys;

						for (var j = numMarkers; j > 0; j--) {
							selectedLayer.marker.removeKey(j);
						}
					}
					if (replacing && markerToComp) {
						var compMarkers = comp.markerProperty;
						for (var i = compMarkers.numKeys; i > 0; i--) {
							compMarkers.removeKey(i);
						}
					}

					for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
						savedSelectedProperWithoutKeyframes[jackma].selected = true;
					}
					for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
						for (j = 0; j < selectedKeysLength[i]; j++) {
							savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
						}
					}
					for (var i = 0; i < finalInstants.length; i++) {
						var index = i;
						if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
							var propertyName = selectedProperty.name + "_" + indexToLook;
						} else {
							var propertyName = selectedProperty.name;
						}
						var equals = "=";
						var layerName = selectedLayer.name;

						var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);

						if (markerToComp == false) {
							selectedLayer.property("ADBE Marker").setValueAtTime(finalInstants[i] * comp.frameDuration, new MarkerValue(fullLabel));
						} else {
							comp.markerProperty.setValueAtTime(finalInstants[i] * comp.frameDuration, new MarkerValue(fullLabel));
						}
					}
				} else {
					var name = selectedProperty.name;
					if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
						var propertyName = selectedProperty.name + "_" + indexToLook;
					} else {
						var propertyName = selectedProperty.name;
					}

					alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
				}
			}
		}

		var indiceEloignement = 0.001;

		if (comp.selectedProperties.length == 0) {
			alert("No property is selected!");
		} else {

			if (isNaN(value)) {
				
				alert("Invalid Target Value"); // display "invalid target value" alert when target value is an array or is "schtroumpf"
			} 
			else {
				for (var am = 0; am < selectedLayers.length; am++) {
					var selectedLayer = selectedLayers[am];

					for (var um = 0; um < selectedLayer.selectedProperties.length; um++) {
				
						if (selectedLayer.selectedProperties[um].value == undefined) { //to skip selected properties Groups such as "Transform" or "Effects"
							um++;
						}
						var selectedProperty = selectedLayer.selectedProperties[um];
						var indexToLook = parseFloat(indexToLookAt); // which dimension

						var isPropertyStatic = isStatic(selectedProperty, nbofframes, comp, indexToLook);

						if (!(selectedProperty.value instanceof Array)) {
							indexToLook = undefined;
						}

						if (selectedProperty !== null && selectedProperty instanceof Property) {
							if (selectedProperty && !isPropertyStatic) {
								if (selectedProperty) {
									if (isNaN(value)) {
										alert("Invalid Target Value");
									}
									if (!isNaN(value)) {
										var values = [];

										for (var i = 0; i < nbofframes; i++) {
											if (selectedProperty.value instanceof Array) {
												var propertyValue = parseFloat(selectedProperty.valueAtTime(i * comp.frameDuration, false)[indexToLook]);
											} else {
												var propertyValue = parseFloat(selectedProperty.valueAtTime(i * comp.frameDuration, false));
											}

											values.push(propertyValue);
										}

										var instants = [];

										if (values.length > 2) {
											if (userChoice == 1) {
												var isRound = false;
												linearInterpolation(userInput, value, values, comp, instants, framesarray, selectedLayer, selectedProperty, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
											} else if (userChoice == 2) {
												var isRound = false;
												cubicSplineInterpolation(userInput, value, values, framesarray, selectedLayer, selectedProperty, comp, instants, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
											} else if (userChoice == 3) {
												var isRound = true;
												linearInterpolation(userInput, value, values, comp, instants, framesarray, selectedLayer, selectedProperty, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
											} else if (userChoice == 4) {
												var isRound = true;
												cubicSplineInterpolation(userInput, value, values, framesarray, selectedLayer, selectedProperty, comp, instants, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
											} else {
											}
										} else if (userChoice == 1 || userChoice == 2) {
											var isRound = false;
											linearInterpolation(userInput, value, values, comp, instants, framesarray, selectedLayer, selectedProperty, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
										} else if (userChoice == 3 || userChoice == 4) {
											var isRound = true;
											linearInterpolation(userInput, value, values, comp, instants, framesarray, selectedLayer, selectedProperty, indiceEloignement, mergingthreshold, isRound, markerToComp, indexToLook);
										}
									}
								} else {
									alert("No property is selected!");
								}
							} else {
								if (selectedProperty) { //static research method for non-animated properties
                                    
									if (isNaN(value)) {
										alert("Invalid Target Value");
									} else {
										if (selectedProperty.value instanceof Array) { 
											if (value == parseFloat(selectedProperty.valueAtTime(0, false)[indexToLook])) {
												var index = i;
												if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
													var propertyName = selectedProperty.name + "_" + indexToLook;
												} else {
													var propertyName = selectedProperty.name;
												}
												if (replacing && !markerToComp) {
													var numMarkers = selectedLayer.marker.numKeys;

													for (var j = numMarkers; j > 0; j--) {
														selectedLayer.marker.removeKey(j);
													}
												}
												if (replacing && markerToComp) {
													var compMarkers = comp.markerProperty;
													for (var i = compMarkers.numKeys; i > 0; i--) {
														compMarkers.removeKey(i);
													}
												}

												for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
													savedSelectedProperWithoutKeyframes[jackma].selected = true;
												}
												for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
													for (j = 0; j < selectedKeysLength[i]; j++) {
														savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
													}
												}

												var equals = "=";
												var layerName = selectedLayer.name;
												var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);
												if (markerToComp == false) {
													selectedLayer.property("ADBE Marker").setValueAtTime(0, new MarkerValue(fullLabel));
												} else {
													comp.markerProperty.setValueAtTime(0, new MarkerValue(fullLabel));
												}
											} else {
												if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
													var propertyName = selectedProperty.name + "_" + indexToLook;
												} else {
													var propertyName = selectedProperty.name;
												}

												alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
											}
										} else {
											if (value == parseFloat(selectedProperty.valueAtTime(0, false))) {
												var index = i;
												if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
													var propertyName = selectedProperty.name + "_" + indexToLook;
												} else {
													var propertyName = selectedProperty.name;
												}

												if (replacing && !markerToComp) {
													var numMarkers = selectedLayer.marker.numKeys;

													for (var j = numMarkers; j > 0; j--) {
														selectedLayer.marker.removeKey(j);
													}
												}
												if (replacing && markerToComp) {
													var compMarkers = comp.markerProperty;
													for (var i = compMarkers.numKeys; i > 0; i--) {
														compMarkers.removeKey(i);
													}
												}

												for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
													savedSelectedProperWithoutKeyframes[jackma].selected = true;
												}
												for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
													for (j = 0; j < selectedKeysLength[i]; j++) {
														savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
													}
												}
												var equals = "=";
												var layerName = selectedLayer.name;
												var fullLabel = toLabel(userInput, value, index, layerName, equals, propertyName);
												if (markerToComp == false) {
													selectedLayer.property("ADBE Marker").setValueAtTime(0, new MarkerValue(fullLabel));
												} else {
													comp.markerProperty.setValueAtTime(0, new MarkerValue(fullLabel));
												}
											} else {
												if (selectedProperty.value instanceof Array && indexToLook !== undefined) {
													var propertyName = selectedProperty.name + "_" + indexToLook;
												} else {
													var propertyName = selectedProperty.name;
												}

												alert("No match in Layer " + selectedLayer.index + " " + propertyName + " ! (╯°□°）╯︵ ┻━┻");
											}
										}
									}
								} else {
									alert("No property is selected!");
								}
							}
						} else {
							break;
						}
					}
				}
			}
		}
	}
	button1.onClick = function () {
		app.beginUndoGroup("Add Markers");

		var replacing = false;
		var deleting = false;
		var markerToComp = radiobutton1.value;
		var comp = app.project.activeItem;
		var selectedLayers = comp.selectedLayers;
		var savedSelectedProperWithoutKeyframes = []; // to store the selection in case it gets deselected during one the removeKey methods.
		var savedSelectedPropertiesWithKeyframes = [];
		var savedSelectedKeyframes = [];
		var selectedKeysLength = [];

		if (comp.selectedProperties !== null) {
			var savedSelectedProperties = comp.selectedProperties;
		}
		run(edittext1a, dropdown1, edittext15, radiobutton1, edittext2, replacing, deleting, comp, savedSelectedProperties, selectedLayers, markerToComp, savedSelectedProperWithoutKeyframes, savedSelectedPropertiesWithKeyframes, selectedKeysLength, savedSelectedKeyframes);
		app.endUndoGroup();
	};
	button2.onClick = function () {
		app.beginUndoGroup("Swap Markers");
		var replacing = true;
		var deleting = false;
		var markerToComp = radiobutton1.value;
		var comp = app.project.activeItem;
		var selectedLayers = comp.selectedLayers;
		var savedSelectedProperties = comp.selectedProperties;
		var savedSelectedProperWithoutKeyframes = [];
		var savedSelectedPropertiesWithKeyframes = [];
		var savedSelectedKeyframes = [];
		var selectedKeysLength = [];
		for (i = 0; i < savedSelectedProperties.length; i++) { // to restore the initial selection
			if (comp.selectedProperties[i].numKeys < 1) {
				savedSelectedProperWithoutKeyframes.push(savedSelectedProperties[i]);
			} else {
				savedSelectedPropertiesWithKeyframes.push(comp.selectedProperties[i]);
				savedSelectedKeyframes.push(comp.selectedProperties[i].selectedKeys);
				selectedKeysLength.push(comp.selectedProperties[i].selectedKeys.length);
			}
		}
		var compMarkers = comp.markerProperty;
		run(edittext1a, dropdown1, edittext15, radiobutton1, edittext2, replacing, deleting, comp, savedSelectedProperties, selectedLayers, markerToComp, savedSelectedProperWithoutKeyframes, savedSelectedPropertiesWithKeyframes, selectedKeysLength, savedSelectedKeyframes);

		for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
			savedSelectedProperWithoutKeyframes[jackma].selected = true;
		}
		for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
			for (j = 0; j < selectedKeysLength[i]; j++) {
				savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
			}
		}

		app.endUndoGroup();
	};
	button3.onClick = function () {
		app.beginUndoGroup("Delete Markers");
		var markerToComp = radiobutton1.value;
		var comp = app.project.activeItem;
		var selectedLayers = comp.selectedLayers;
		var savedSelectedProperties = comp.selectedProperties;
		var savedSelectedProperWithoutKeyframes = [];
		var savedSelectedPropertiesWithKeyframes = [];
		var savedSelectedKeyframes = [];
		var selectedKeysLength = [];
		for (i = 0; i < savedSelectedProperties.length; i++) {
			if (comp.selectedProperties[i].numKeys < 1) {
				savedSelectedProperWithoutKeyframes.push(savedSelectedProperties[i]);
			} else {
				savedSelectedPropertiesWithKeyframes.push(comp.selectedProperties[i]);
				savedSelectedKeyframes.push(comp.selectedProperties[i].selectedKeys);
				selectedKeysLength.push(comp.selectedProperties[i].selectedKeys.length);
			}
		}
		var compMarkers = comp.markerProperty;
		if (markerToComp == true) {
			for (var i = compMarkers.numKeys; i > 0; i--) {
				compMarkers.removeKey(i);
			}
			for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
				savedSelectedProperWithoutKeyframes[jackma].selected = true;
			}
			for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
				for (j = 0; j < selectedKeysLength[i]; j++) {
					savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
				}
			}
		} else {
			if (selectedLayers[0] == null) {
				alert("No layer is selected!");
			} else {
				for (i = 0; i < selectedLayers.length; i++) {
					selectedLayer = selectedLayers[i];
					var numMarkers = selectedLayer.marker.numKeys;

					for (var j = numMarkers; j > 0; j--) {
						selectedLayer.marker.removeKey(j);
					}
				}

				for (jackma = 0; jackma < savedSelectedProperWithoutKeyframes.length; jackma++) {
					savedSelectedProperWithoutKeyframes[jackma].selected = true;
				}

				for (i = 0; i < savedSelectedPropertiesWithKeyframes.length; i++) {
					for (j = 0; j < selectedKeysLength[i]; j++) {
						savedSelectedPropertiesWithKeyframes[i].setSelectedAtKey(savedSelectedKeyframes[i][j], true);
					}
				}
			}
		}

		app.endUndoGroup();
	};
	win.layout.layout(true);
	win.layout.resize();
	win.onResizing = win.onResize = function () {
	this.layout.resize();
	};
	if (win instanceof Window) win.show();
	return win;
})();
