export default {
  name: "Package.swift",
  language: "swift",
  code: `
import PackageDescription

let package = Package(
    name: "TorusSwiftDirectSDK",
    dependencies: [
        .package(name: "TorusSwiftDirectSDK", url: "https://github.com/torusresearch/torus-direct-swift-sdk", .upToNextMajor(from: "0.0.1"))
    ],
)
`.trim(),
};
